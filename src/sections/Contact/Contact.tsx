import SocialLinks from '../SocialLinks'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="h-full min-h-screen w-full bg-linear-to-br from-teal-300 to-teal-600 py-20">
      <div className="mx-auto grid h-full min-h-screen max-w-5xl place-content-center gap-10 p-6 text-white">
        <div className="mb-5 rounded-md text-center leading-3 text-nowrap text-white/90 md:text-start">
          <h2 className="text-5xl drop-shadow-md">
            <strong className="font-medium drop-shadow-md">Contact me ?</strong>
          </h2>
        </div>

        <div className="grid grid-rows-[auto_150px_auto] gap-5">
          <ContactForm />
          <div className="divider divider-horizontal justify-self-center text-white before:bg-white/50 after:bg-white/50">
            OR
          </div>
          <div className="flex justify-center">
            <SocialLinks iconsStyles="text-5xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
