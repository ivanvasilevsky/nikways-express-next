import models from "../models/models.js"
import fileService from "../services/fileService.js"
import messageService from "../services/messageService.js"

class serviceGroupeController {
  async create(req, res) {
    try {
      const { title, subtitle } = req.body

      const serviceVerify = await models.Services_groupe.findOne({ where: { title } })
      if (serviceVerify) {
        return res.json(messageService.send(0, 'Группа с таким названием уже есть!'))
      }

      const photo = req.files.image
      const image = fileService.saveFile('services', null, photo)

      const serviceGroupe = await models.Services_groupe.create({ title, subtitle, image })

      res.json(serviceGroupe)
    } catch (e) {
      console.log(e)
    }
  }

  async getAll(req, res) {
    try {
      const services = await models.Services_groupe.findAll({
        include: [{
          model: models.Services_groupe_item
        }]
      })
      res.json(services)
    } catch (e) {
      console.log(e)
    }
  }

  async update(req, res) {
    try {
      const { id, title, subtitle } = req.body

      const serviceVerify = await models.Services_groupe.findOne({ where: { title } })
      if (serviceVerify && serviceVerify.id != id) {
        return res.json(messageService.send(0, 'Группа с таким названием уже есть!'))
      }

      if (req.files != null) {
        const serviceCheck = await models.Services_groupe.findOne({ where: { id } })
        fileService.deleteFile('services', null, serviceCheck.image)

        const photo = req.files.image
        const image = fileService.saveFile('services', null, photo)

        await models.Services_groupe.update({ title, subtitle, image }, { where: { id }})
      } else {
        await models.Services_groupe.update({ title, subtitle }, { where: { id }})
      }


      res.json(messageService.send(1, 'Группа обновлена!'))
    } catch (e) {
      console.log(e)
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      const serviceCheck = await models.Services_groupe.findOne({ where: { id }})
      fileService.deleteFile('services', null, serviceCheck.image)

      await models.Services_groupe.destroy({ where: { id }})

      res.json(messageService.send(1, 'Группа удалена!'))

    } catch (e) {
      console.log(e)
    }
  }

  async createItem(req, res) {
    try {
      const { name, text, servicesGroupId } = req.body

      const itemVerify = await models.Services_groupe_item.findOne({ where: { name }})
      if (itemVerify) {
        return res.json(messageService.send(0, 'Услуга с таким названием уже есть!'))
      }

      const item = await models.Services_groupe_item.create({ name, text, servicesGroupId })
      res.json(item)
    } catch (e) {
      console.log(e)
    }
  }

  async updateItem(req, res) {
    try {
      const { id, name, text, servicesGroupId } = req.body

      const itemVerify = await models.Services_groupe_item.findOne({ where: { name } })
      if (itemVerify && itemVerify.id != id) {
        return res.json(messageService.send(0, 'Услуга с таким названием уже есть!'))
      }

      await models.Services_groupe_item.update({ name, text, servicesGroupId }, { where: { id } })
      res.json(messageService.send(1, 'Услуга обновлена!'))
    } catch (e) {
      console.log(e)
    }
  }

  async deleteItem(req, res) {
    try {
      const { id } = req.params

      await models.Services_groupe_item.destroy({ where: { id } })

      res.json(messageService.send(1, 'Услуга удалена!'))
    } catch (e) {
      console.log(e)
    }
  }
}

export default new serviceGroupeController