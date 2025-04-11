import type { BunRequest } from 'bun'
import { serve } from 'bun'
import type { ContactFormValues } from '../src/sections/Contact/ContactForm'
import { APP_ROUTES, getServerPort } from '../src/utilities/route-helpers'
import { sendMail } from './emailer'

const port = getServerPort()

const responseOptions = {
  headers: {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
}

serve({
  port,
  routes: {
    [APP_ROUTES.SUBMIT_FORM]: {
      OPTIONS: () => new Response(null, responseOptions),
      POST: async (req: BunRequest) => {
        try {
          const data = (await req
            .json()
            .catch(console.error)) as ContactFormValues

          await sendMail(data)

          if (!Object.keys(data).length) {
            return new Response('No data received', {
              ...responseOptions,
              status: 400,
            })
          }

          return new Response('Form submitted successfully', responseOptions)
        } catch (err) {
          console.log(err)

          return new Response('Failed to submit form', {
            ...responseOptions,
            status: 500,
          })
        }
      },
    },
  },
})

console.log(`Server running on ${port}`)
