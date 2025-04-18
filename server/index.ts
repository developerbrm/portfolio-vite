import type { BunRequest } from 'bun'
import { serve } from 'bun'
import type { ContactFormValues } from '../src/sections/Contact/ContactForm'
import {
  APP_ROUTES,
  GETResponseOptions,
  getServerPort,
  POSTResponseOptions,
} from '../src/utilities/route-helpers'
import { sendMail } from './emailer'
import { projects } from './db/projects'
import type { ProjectItem } from './db/projects.model'

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
          data = projects

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
  },
})

console.log(`Server running on ${port}`)
