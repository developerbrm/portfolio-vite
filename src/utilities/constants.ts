import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { IoDocumentText } from 'react-icons/io5'
import { MdMail } from 'react-icons/md'
import { ContactFormFieldProps } from '../sections/Contact/ContactFormField'
import { constructPubicMediaUrl } from './utilities'

export const HERO_SECTION_VIDEO_URL = constructPubicMediaUrl(
  '/hero/hero-video.mp4'
)

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
