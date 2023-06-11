import models from "../models/models.js"
import fileService from "../services/fileService.js"
import messageService from "../services/messageService.js"

class serviceController {
  async create(req, res) {
    try {
      const { name, desc, type, kp_link } = req.body

      const serviceVerify = await models.Services.findOne({ where: { name } })
      if (serviceVerify) {
        return res.json(messageService.send(0, 'Услуга с таким названием уже есть!'))
      }

      const images = req.files.image
      const image = fileService.saveFile('services', null, images)

      const services = await models.Services.create({ name, desc, image, type, kp_link })
      res.json(services)

    } catch (e) {
      console.log(e)
    }
  }

  async getAll(req, res) {
    try {
      const { type, limit } = req.query

      let services

      if (type) {
        const idsType = type.split('-')

        services = await models.Services.findAll({ where: { type: idsType } })
      } else {
        services = await models.Services.findAll()
      }

      if (limit) {
        services = services.slice(0, limit)
      }

      res.json(services)
    } catch (e) {
      console.log(e)
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params

      const service = await models.Services.findOne({ where: { id } })

      res.json(service)
    } catch (e) {
      console.log(e)
    }
  }

  async update(req, res) {
    try {
      const { id, name, desc, type, kp_link } = req.body

      const serviceVerify = await models.Services.findOne({ where: { name } })
      if (serviceVerify && serviceVerify.id != id) {
        return res.json(messageService.send(0, 'Услуга с таким названием уже есть!'))
      }

      const serviceCheck = await models.Services.findOne({ where: { id } })

      if (req.files != null) {
        fileService.deleteFile('services', null, serviceCheck.image)

        const images = req.files.image
        const image = fileService.saveFile('services', null, images)
        await models.Services.update({ name, desc, image, type, kp_link }, { where: { id } })
      } else {
        await models.Services.update({ name, desc, type, kp_link }, { where: { id } })
      }

      res.json(messageService.send(1, 'Услуга обновлена!'))
    } catch (e) {
      console.log(e)
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      const serviceCheck = await models.Services.findOne({ where: { id } })
      fileService.deleteFile('services', null, serviceCheck.image)

      await models.Services.destroy({ where: { id } })
      res.json(messageService.send(1, 'Услуга удалена!'))
    } catch (e) {
      console.log(e)
    }
  }
}

export default new serviceController