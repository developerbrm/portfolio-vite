import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: 'dev.brm.acc@gmail.com',
    pass: 'pass',
  },
})

transporter.verify(function (error, success) {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take our messages')
  }
})

export async function sendMail() {
  const message = {
    from: '"Message | Portfolio site 👻"  <dev.brm.acc@gmail.com>',
    to: 'developerbrm@gmail.com',
    subject: 'Message from Portfolio site',
    html: '<b>Hello world?</b>',
  }

  let info = {}

  try {
    info = await transporter.sendMail(message)
  } catch (error) {
    console.log(error)
  }

  return info
}
