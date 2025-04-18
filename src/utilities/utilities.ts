import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { IoDocumentText } from 'react-icons/io5'
import { MdMail } from 'react-icons/md'
import { Flip } from 'react-toastify'
import type { ProjectItem } from '../../server/db/projects.model'
import { APP_ROUTES, constructApiUrl } from '../utilities/route-helpers'
import { ContactFormValues } from '../sections/Contact/ContactForm'
import { ContactFormFieldProps } from '../sections/Contact/ContactFormField'

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/developerbrm/',
    Icon: FaGithub,
    title: 'GitHub',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/developerbrm/',
    Icon: FaLinkedinIn,
    title: 'LinkedIn',
  },
  {
    name: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=developer.brm@gmail.com',
    Icon: MdMail,
    title: 'Email',
  },
  {
    name: 'Resume',
    href: 'https://flowcv.com/resume/fudrr1bjnr/',
    Icon: IoDocumentText,
    title: 'Resume',
  },
]

export const formFieldsArr: ContactFormFieldProps[] = [
  {
    Element: 'input',
    type: 'text',
    name: 'name',
    label: 'Your full name',
    placeholder: 'John Doe',
    required: true,
  },

  {
    Element: 'input',
    type: 'email',
    name: 'email',
    label: 'Your email',
    placeholder: 'abc@xyz.com',
    required: true,
  },

  {
    Element: 'textarea',
    type: 'text',
    name: 'message',
    label: 'Your message',
    placeholder: 'Your message',
    // required: true,
    rows: 3,
  },
]

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

export const constructImageUrl = (imageUrl: string) => {
  return `${window.location.href}${imageUrl}`
}
