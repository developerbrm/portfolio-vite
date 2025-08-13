import type { BunRequest } from 'bun'
import { serve } from 'bun'
import type { ContactFormValues } from '../src/sections/Contact/ContactForm'
import {
  APP_ROUTES,
  GETResponseOptions,
  getServerPort,
  POSTResponseOptions,
} from '../src/utilities/route-helpers'
import { getProjects } from './db/projects'
import { sendMail } from './utilities'
import type { ProjectItem } from './types'

const port = getServerPort()

serve({
  port,
  routes: {
    [APP_ROUTES.SUBMIT_FORM]: {
      OPTIONS: () => new Response(null, POSTResponseOptions),
      POST: async (req: BunRequest) => {
        try {
          const data = (await req
            .json()
            .catch(console.error)) as ContactFormValues

          await sendMail(data)

          if (!Object.keys(data).length) {
            return new Response('No data received', {
              ...POSTResponseOptions,
              status: 400,
            })
          }

          return new Response(
            'Form submitted successfully',
            POSTResponseOptions
          )
        } catch (err) {
          console.log(err)

          return new Response('Failed to submit form', {
            ...POSTResponseOptions,
            status: 500,
          })
        }
      },
    },
    [APP_ROUTES.GET_PROJECTS]: {
      OPTIONS: () => new Response(null, GETResponseOptions),
      GET: async () => {
        let data: ProjectItem[] = []

        try {
          data = await getProjects()

          return new Response(JSON.stringify(data), GETResponseOptions)
        } catch (err) {
          console.log(err)

          return new Response('Failed to get projects', {
            ...GETResponseOptions,
            status: 500,
          })
        }
      },
    },
    [APP_ROUTES.PING_SERVER]: {
      OPTIONS: () => new Response(null, GETResponseOptions),
      GET: async () => {
        const message = `हाँ भाई मुझे लगता है कि मैं अब जागा हूँ या शायद मैं पहले ही जाग चुका था`

        return new Response(JSON.stringify(message), GETResponseOptions)
      },
    },
  },
})

console.log(`Server running on ${port}`)
