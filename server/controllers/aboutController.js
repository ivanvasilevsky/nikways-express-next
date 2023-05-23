import models from "../models/models.js"
import messageService from "../services/messageService.js"

class aboutController {
  async get(req, res) {
    try {
      const about = await models.About.findOne({ where: { id: 1 }})
      res.json(about)
    } catch (e) {
      console.log(e)
    }
  }

  async update(req, res) {
    try {
      const { about_video, about_text } = req.body

      const about = await models.About.update({ about_video, about_text }, { where: { id: 1 } })
      if (about) {
        res.json(messageService.send(1, 'Информация обновлена!'))
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export default new aboutController