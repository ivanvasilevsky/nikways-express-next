import mailSample from "../services/mailSample.js"
import mailService from "../services/mailService.js"
import messageService from "../services/messageService.js"

class sendMailController {
  async send(req, res) {
    try {

      const { fio, phone } = req.body

      await mailService.sendMail('Заявка с Nikways', mailSample.miniForm(fio, phone))

      res.json(messageService.send(1, 'Сообщение отправлено!'))

    } catch (e) {
      console.log(e)
    }
  }
}

export default new sendMailController