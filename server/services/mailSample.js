class emailSample {
  miniForm(fio, phone) {

    const bodyHeader = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Welcome Email</title>
      <style>
      </style>
    </head>
    <body>
    <div class="main">
    `

    const bodyFooter = `
      </div>
    </body>
    </html>
    `

    return `
      ${bodyHeader}
      <h1>Заявка с Nikways</h1>
      <p>ФИО: <span>${fio}</span></p>
      <p>Телефон: <span>${phone}</span></p>
      ${bodyFooter}
    `
  }
}

export default new emailSample