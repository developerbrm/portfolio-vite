import nodemailer from 'nodemailer'
import type { ContactFormValues } from '../src/sections/Contact/ContactForm'
import { capitalize } from '../src/utilities/utilities'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: import.meta.env.EMAIL_USER,
    pass: import.meta.env.EMAIL_PASSWORD,
  },
})

transporter.verify(function (error) {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take our messages')
  }
})

export async function sendMail(data: ContactFormValues) {
  const message = {
    from: '"Form submitted | Portfolio site 👻" <dev.brm.acc@gmail.com>',
    to: 'developerbrm@gmail.com',
    subject: `Message from ${data.name}`,
    html: ``,
  }

  let html = ``

  for (const [key, value] of Object.entries(data)) {
    html += `<p><strong>${capitalize(key)}: </strong>${value}</p>`
  }

  message.html = html

  try {
    const info = await transporter.sendMail(message)

    if (!info.accepted) throw new Error('Failed to send email')

    return info
  } catch (error) {
    console.log(error)

    throw new Error('Failed to send email')
  }
}
