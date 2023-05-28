import nodemailer from 'nodemailer'

const BASE_MAIL = 'showpowerful@gmail.com'

class mailService {
  async sendMail(title, body, email = BASE_MAIL) {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: false,
      auth: {
        user: BASE_MAIL,
        pass: 'txhdecqpjfxnbriq'
      }
    })

    const mailOptions = {
      from: BASE_MAIL,
      to: email,
      subject: title,
      html: body
    }

    transport.sendMail(mailOptions, err => {
      if (err == null) {
        return 1
      } else {
        return 0
      }
    })
  }
}

export default new mailService