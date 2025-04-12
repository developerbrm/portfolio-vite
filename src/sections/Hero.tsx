import SocialLinks from '../components/SocialLinks'

const Hero = () => {
  return (
    <div className="h-screen w-full bg-linear-to-br from-violet-400 to-violet-600">
      <div className="mx-auto grid h-full max-w-5xl place-content-center text-white">
        <div className="rounded-md p-6 leading-3 text-white/70 md:text-nowrap">
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
    </div>
  )
}

export default Hero
