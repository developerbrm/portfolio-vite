import { useLayoutEffect } from 'react'
import { pingServer } from '../utilities/utilities'
import Contact from './Contact/Contact'
import Hero from './Hero'
import Projects from './Projects/Projects'

const Sections = () => {
  useLayoutEffect(() => {
    pingServer()
  }, [])

  return (
    <>
      <Hero />
      <Projects />
      <Contact />
    </>
  )
}

export default Sections
