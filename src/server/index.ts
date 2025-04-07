import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { APP_ROUTES, SERVER_PORT } from '../utilities/route-helpers'
import { sendMail } from './emailer'

const app = express()
const port = SERVER_PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())

app.post(APP_ROUTES.SUBMIT_FORM, (req, res) => {
  const data = req.body

  sendMail(data)
    .then(() => res.send('Form submitted successfully'))
    .catch((err) => {
      res.status(500).send('Failed to submit form')
      console.log(err)
    })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
