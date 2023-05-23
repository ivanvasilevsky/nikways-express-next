import slugify from "slugify"
import models from "../models/models.js"
import fileService from "../services/fileService.js"
import messageService from "../services/messageService.js"

class portfolioController {
  async create(req, res) {
    try {
      const {
        name,
        tags,
        type,
        client,
        deadline,
        video,
        backstage,
        review,
        goal,
        work_time,
        place,
        environment,
        theme,
        price,
        idea_text,
        categoryId
      } = req.body

      const {
        preview,
        bg,
        idea_photo
      } = req.files

      const portfolioVerify = await models.Portfolio.findOne({ where: { name } })
      if (portfolioVerify) {
        return res.json(messageService.send(0, 'Проект с таким названием существует!'))
      }

      const slug = slugify(name)

      const portfolio = await models.Portfolio.create({
        name,
        slug,
        tags,
        type,
        client,
        deadline,
        video,
        backstage,
        review,
        goal,
        work_time,
        place,
        environment,
        theme,
        price,
        idea_text,
        categoryId
      })

      const previewImage = fileService.saveFile('portfolio', portfolio.id, preview)
      const bgImage = fileService.saveFile('portfolio', portfolio.id, bg)
      const ideaPhotoImage = fileService.saveFile('portfolio', portfolio.id, idea_photo)

      await models.Portfolio.update({
        preview: previewImage,
        bg: bgImage,
        idea_photo: ideaPhotoImage
      }, { where: { id: portfolio.id } })


      if (portfolio) {
        res.json(portfolio)
      } else {
        res.json(messageService.send(0, 'Ошибка создания!'))
      }

    } catch (e) {
      console.log(e)
    }
  }

  async createGallery(req, res) {
    try {
      const { portfolioId, type, block } = req.body

      if (type == 1) {
        const images = req.files.source
        const image = fileService.saveFile('portfolio', portfolioId, images)
        models.Portfolio_gallery.create({ source: image, type, block, portfolioId })

        return res.json(messageService.send(1, 'Создано!'))
      }

      if (type == 2) {
        const { source } = req.body
        models.Portfolio_gallery.create({ source, type, block, portfolioId })

        return res.json(messageService.send(1, 'Создано!'))
      }

      res.json(messageService.send(0, 'Ошибка создания!'))

    } catch (e) {
      console.log(e)
    }
  }

  async deleteGallery(req, res) {
    try {
      const { id } = req.params

      await models.Portfolio_gallery.destroy({ where: { id } })
      return res.json(messageService.send(1, 'Удаленно!'))
    } catch (e) {
      console.log(e)
    }
  }

  async update(req, res) {
    try {
      const {
        id,
        name,
        tags,
        type,
        client,
        deadline,
        video,
        backstage,
        review,
        goal,
        work_time,
        place,
        environment,
        theme,
        price,
        idea_text,
        categoryId
      } = req.body

      const portfolioVerify = await models.Portfolio.findOne({ where: { name } })
      if (portfolioVerify && portfolioVerify.id != id) {
        return res.json(messageService.send(0, 'Проект с таким названием существует!'))
      }

      const slug = slugify(name).toLowerCase()

      const portfolio = await models.Portfolio.update({
        name,
        slug,
        tags,
        type,
        client,
        deadline,
        video,
        backstage,
        review,
        goal,
        work_time,
        place,
        environment,
        theme,
        price,
        idea_text,
        categoryId
      }, { where: { id } })



      const portCheck = await models.Portfolio.findOne({ where: { id } })

      if (req.files.preview) {
        const { preview } = req.files
        fileService.deleteFile('portfolio', id, portCheck.preview)
        const previewImage = fileService.saveFile('portfolio', id, preview)

        await models.Portfolio.update({ preview: previewImage }, { where: { id }})
      }

      if (req.files.idea_photo) {
        const { idea_photo } = req.files
        fileService.deleteFile('portfolio', id, portCheck.idea_photo)
        const ideaPhotoImage = fileService.saveFile('portfolio', id, idea_photo)

        await models.Portfolio.update({ idea_photo: ideaPhotoImage }, { where: { id } })
      }

      if (req.files.bg) {
        const { bg } = req.files
        fileService.deleteFile('portfolio', id, portCheck.bg)
        const bgImage = fileService.saveFile('portfolio', id, bg)

        await models.Portfolio.update({ bg: bgImage }, { where: { id } })
      }


      if (portfolio) {
        res.json(messageService.send(1, 'Проект обновлен!'))
      } else {
        res.json(messageService.send(0, 'Ошибка создания!'))
      }

    } catch (e) {
      console.log(e)
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params


      const portCheck = await models.Portfolio.findOne({ where: { id } })
      fileService.deleteFile('portfolio', id, portCheck.preview)
      fileService.deleteFile('portfolio', id, portCheck.idea_photo)
      fileService.deleteFile('portfolio', id, portCheck.bg)

      const portGalleries = await models.Portfolio_gallery.findAll({ portfolioId: id })

      portGalleries.forEach(async item => {
        if (item.type == 1) {
          fileService.deleteFile('portfolio', id, item.source)
        }
        await models.Portfolio_gallery.destroy({ where: { id: item.id } })
      })

      fileService.deleteFolder('portfolio', id)

      await models.Portfolio.destroy({ where: { id }})
      res.json(messageService.send(1, 'Проект удален!'))
    } catch (e) {
      console.log(e)
    }
  }


  async getAll(req, res) {
    try {

    } catch (e) {
      console.log(e)
    }
  }

  async getOne(req, res) {
    try {
      const { slug } = req.params

      const portfolio = await models.Portfolio.findOne({
        where: { slug },
        include: [{
          model: models.Portfolio_gallery
        }]
      })

      res.json(portfolio)
    } catch (e) {
      console.log(e)
    }
  }
}

export default new portfolioController