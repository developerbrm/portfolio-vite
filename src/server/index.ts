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
    .then((info) => res.send(info))
    .catch((err) => {
      res.send(err)
      console.log(err)
    })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
