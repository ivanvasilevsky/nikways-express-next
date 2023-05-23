import models from "../models/models.js"
import messageService from "../services/messageService.js"



class contactController {
  async get(req, res) {
    try {
      const contacts = await models.Contacts.findOne({ where: { id: 1 } })
      res.json(contacts)
    } catch (e) {
      console.log(e)
    }
  }

  async update(req, res) {
    try {
      const {
        email_one,
        email_two,
        email_three,
        email_four,
        number_one,
        number_two,
        link_insta,
        link_whatsapp,
        link_facebook,
        link_youtube
      } = req.body

      const contacts = models.Contacts.update({
        email_one,
        email_two,
        email_three,
        email_four,
        number_one,
        number_two,
        link_insta,
        link_whatsapp,
        link_facebook,
        link_youtube
       }, { where: { id: 1 }})

      if (contacts) {
        res.json(messageService.send(1, 'Контакты обновлены!'))
      }

    } catch (e) {
      console.log(e)
    }
  }

  // async create(req, res) {
  //   try {

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
}

export default new contactController