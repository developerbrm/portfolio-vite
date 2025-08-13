import { Flip } from 'react-toastify'
import type { ProjectItem } from '../../server/types'
import { ContactFormValues } from '../sections/Contact/ContactForm'
import { APP_ROUTES, constructApiUrl } from '../utilities/route-helpers'
import { formFieldsArr } from './constants'

export const getFormLabel = (name: keyof ContactFormValues) =>
  formFieldsArr.find((field) => field.name === name)?.label

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const commonToastOptions = {
  autoClose: 2000,
  transition: Flip,
}

export const appendSlash = (str: string) =>
  str.endsWith('/') ? str : `${str}/`

export const removeStartSlash = (str: string) =>
  str.startsWith('/') ? str.slice(1) : str

export const constructPubicMediaUrl = (imageUrl: string) => {
  const baseUrl = appendSlash(window.location.href)
  const endPoint = removeStartSlash(imageUrl)

  return `${baseUrl}${endPoint}`
}

export const fetchProjects = async () => {
  let data: ProjectItem[] = []

  try {
    // const res = await fetch(constructApiUrl(APP_ROUTES.GET_PROJECTS))

    const url = constructPubicMediaUrl('/projects/projects.json')
    const res = await fetch(url)
    data = await res.json()
  } catch (error) {
    console.log(error)
    data = []
  }

  return data
}

export const pingServer = async () => {
  const pingedServerAlready = document.body.dataset.pingedServerAlready

  if (pingedServerAlready) return

  try {
    const res = await fetch(constructApiUrl(APP_ROUTES.PING_SERVER))
    const data = await res.json()

    document.body.dataset.pingedServerAlready = 'yes'

    return data
  } catch (error) {
    console.log(error)
  }
}
