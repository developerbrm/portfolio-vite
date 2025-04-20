import { Flip } from 'react-toastify'
import type { ProjectItem } from '../../server/db/projects.model'
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

export const fetchProjects = async () => {
  let data: ProjectItem[] = []

  try {
    const res = await fetch(constructApiUrl(APP_ROUTES.GET_PROJECTS))
    data = await res.json()
  } catch (error) {
    console.log(error)
    data = []
  }

  return data
}

export function constructPubicMediaUrl(imageUrl: string) {
  const baseUrl = appendSlash(window.location.href)
  const endPoint = removeStartSlash(imageUrl)

  return `${baseUrl}${endPoint}`
}

export const appendSlash = (str: string) =>
  str.endsWith('/') ? str : `${str}/`

export const removeStartSlash = (str: string) =>
  str.startsWith('/') ? str.slice(1) : str
