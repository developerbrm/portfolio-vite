import { SOCIAL_LINKS } from '../utilities/utilities'

const SocialLinks = () => {
  return (
    <div className="flex gap-1">
      {SOCIAL_LINKS.map((link) => {
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            className="grid place-content-center rounded-full p-2 text-white/80 transition hover:-translate-y-0.5 hover:scale-105 hover:bg-white/10 hover:text-white/90 focus:-translate-y-0.5 focus:scale-105 focus:bg-white/10 focus:text-white active:-translate-y-0.5 active:scale-95 active:bg-white/10 active:text-white/90"
          >
            <link.Icon className="text-4xl drop-shadow-md" />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
