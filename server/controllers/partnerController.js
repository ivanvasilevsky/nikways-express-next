import models from "../models/models.js"
import fileService from "../services/fileService.js"
import messageService from "../services/messageService.js"

class partnerController {
  async create(req, res) {
    try {
      const { name, full_name, desc, youtube_link } = req.body

      const partnerVerify = await models.Partners.findOne({ where: { name } })
      if (partnerVerify) {
        return res.json(messageService.send(0, 'Партнер с таким названием уже есть!'))
      }

      const images = req.files.image
      const image = fileService.saveFile('partners', null, images)

      const partners = await models.Partners.create({ name, full_name, desc, logo: image, youtube_link })
      res.json(partners)

    } catch (e) {
      console.log(e)
    }
  }

  async getAll(req, res) {
    try {
      let partners = await models.Partners.findAll()

      res.json(partners)
    } catch (e) {
      console.log(e)
    }
  }

  async update(req, res) {
    try {
      const { id, name, full_name, desc, youtube_link } = req.body

      const partnerVerify = await models.Partners.findOne({ where: { name } })
      if (partnerVerify && partnerVerify.id != id) {
        return res.json(messageService.send(0, 'Партнер с таким названием уже есть!'))
      }

      const partnerCheck = await models.Partners.findOne({ where: { id } })

      if (req.files != null) {
        fileService.deleteFile('partners', null, partnerCheck.logo)

        const images = req.files.image
        const image = fileService.saveFile('partners', null, images)
        await models.Partners.update({ name, full_name, desc, logo: image, youtube_link }, { where: { id } })
      } else {
        await models.Partners.update({ name, full_name, desc, youtube_link }, { where: { id } })
      }

      res.json(messageService.send(1, 'Партнер обновлена!'))
    } catch (e) {
      console.log(e)
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      const partnerCheck = await models.Partners.findOne({ where: { id } })
      fileService.deleteFile('partners', null, partnerCheck.logo)

      await models.Partners.destroy({ where: { id } })
      res.json(messageService.send(1, 'Партнер удалена!'))
    } catch (e) {
      console.log(e)
    }
  }
}

export default new partnerController