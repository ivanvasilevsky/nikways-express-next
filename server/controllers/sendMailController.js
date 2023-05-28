import mailSample from "../services/mailSample.js"
import mailService from "../services/mailService.js"
import messageService from "../services/messageService.js"

class sendMailController {
  async sendMini(req, res) {
    try {

      const { fio, phone, title } = req.body

      await mailService.sendMail('Заявка с Nikways', mailSample.miniForm(fio, phone, title))

      res.json(messageService.send(1, 'Сообщение отправлено!'))

    } catch (e) {
      console.log(e)
    }
  }
}

export default new sendMailController