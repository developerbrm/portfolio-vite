import axios, { AxiosResponse } from 'axios'
import { Flip } from 'react-toastify'
import type { PageVisitInfo, ProjectItem } from '../../server/types'
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

const eventsArr: string[] = [
  'scroll',
  'mousemove',
  'keydown',
  'wheel',
  'touchstart',
  'click',
  'load',
  'DOMContentLoaded',
]

const addEvents = (cb: (event: string) => void) =>
  eventsArr.forEach((event) =>
    document.addEventListener(event, () => cb(event), { once: true })
  )

const removeEvents = (cb: (event: string) => void) =>
  eventsArr.forEach((event) =>
    document.removeEventListener(event, () => cb(event))
  )

const onEventCB = (event: string) => {
  if (sessionStorage.getItem('visited')) {
    removeEvents(onEventCB)
    return
  }

  sessionStorage.setItem('visited', 'true')

  const url = constructApiUrl(APP_ROUTES.GET_PAGE_VISIT_INFO)
  const data: PageVisitInfo = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    languages: navigator.languages,
    referrer: document.referrer,
    timestamp: new Date().toString(),
    url: window.location.href,
    platform: navigator?.platform ?? null,
    height: window.innerHeight,
    width: window.innerWidth,
    screenOrientation: window.screen.orientation.type,
    deviceMemory:
      'deviceMemory' in navigator ? Number(navigator.deviceMemory) : null,
    connection:
      'connection' in navigator
        ? (navigator.connection as { effectiveType: string | null })
            ?.effectiveType
        : null,
    triggeredBy: event,
  }

  axios
    .post(url, data)
    .then((res: AxiosResponse) => {
      console.log(res.data)
    })
    .catch((err) => console.error(err))
}

export const sendPageInfo = () => {
  addEvents(onEventCB)
}
