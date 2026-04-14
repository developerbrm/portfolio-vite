import nodemailer from 'nodemailer'
import type { ContactFormValues } from '../src/sections/Contact/ContactForm'
import { capitalize } from '../src/utilities/utilities'
import { DB_NAME, mongoClient } from './db'
import type { PageVisitInfo } from './types'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: import.meta.env.EMAIL_USER,
    pass: import.meta.env.EMAIL_PASSWORD,
  },
})

transporter.verify(function (error) {
  if (error) {
    console.log(error)
  } else {
    console.log('NodeMailer is ready to send emails')
  }
})

const sendFormDataToMongoDB = async (data: ContactFormValues) => {
  console.log('Sending form data to MongoDB')

  mongoClient
    .connect()
    .then((client) => client.db(DB_NAME).collection('FormSubmissions'))
    .then((collection) => collection.insertOne(data))
    .then((res) => console.log(res))
    .catch(console.error)
    .finally(() => mongoClient?.close())
}

export async function sendMail(data: ContactFormValues) {
  const message = {
    from: '"Form submitted | Portfolio site 👻" <dev.brm.acc@gmail.com>',
    to: 'developerbrm@gmail.com',
    subject: `Message from ${data.name}`,
    html: ``,
  }

  sendFormDataToMongoDB(data).catch(console.error)

  let html = ``

  for (const [key, value] of Object.entries(data)) {
    html += `<p><strong>${capitalize(key)}: </strong>${value}</p>`
  }

  message.html = html

  try {
    const info = await transporter.sendMail(message)

    console.log(info)
    if (!info.accepted) throw new Error('Info not accepted')

    return info
  } catch (error) {
    console.error(error)

    throw new Error('NodeMailer transporter error')
  }
}

export const sendPageVisitInfo = async (data: PageVisitInfo) => {
  mongoClient
    .connect()
    .then((client) => client.db(DB_NAME).collection('PageVisits'))
    .then((collection) => collection.insertOne(data))
    .then((res) => console.log(res))
    .catch(console.error)
    .finally(() => mongoClient?.close())
}
