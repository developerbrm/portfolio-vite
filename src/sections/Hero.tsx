import { useState } from 'react'
import SocialLinks from '../components/SocialLinks'
import { constructPubicMediaUrl } from '../utilities/utilities'

const HERO_SECTION_VIDEO_URL = constructPubicMediaUrl('/hero/hero-video.mp4')

const Hero = () => {
  const [isVideoBlurry, setIsVideoBlurry] = useState(false)

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative z-10 mx-auto grid h-full max-w-5xl place-content-center text-white">
        <div
          onPointerOver={() => setIsVideoBlurry(true)}
          onPointerLeave={() => setIsVideoBlurry(false)}
          className={`${isVideoBlurry ? 'scale-102' : ''} rounded-md p-6 leading-3 text-white/70 transition-transform ease-in-out md:text-nowrap`}
        >
          <p className="text-2xl font-medium drop-shadow-md md:text-3xl">
            Hello, I am
          </p>
          <h1 className="text-6xl text-white/80 md:text-7xl">
            <strong className="drop-shadow-md">Braham Prakash</strong>
          </h1>
          <div className="text-xl md:text-3xl">
            <div className="my-2 drop-shadow-md">
              An experienced Front-End developer
            </div>

            <div className="opacity-90">
              <SocialLinks iconsStyles="text-xl" />
            </div>
          </div>
        </div>
      </div>

      <video
        className={`${isVideoBlurry ? 'blur-lg' : 'blur-xs'} pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center opacity-20 grayscale-25 transition-all ease-in-out`}
        src={HERO_SECTION_VIDEO_URL}
        autoPlay
        loop
        muted
      />
    </div>
  )
}

export default Hero
