const Hero = () => {
  return (
    <div className="h-screen w-full bg-linear-to-br from-violet-400 to-violet-600">
      <div className="mx-auto grid h-full max-w-5xl place-content-center text-white">
        <div className="rounded-md p-2 leading-3 text-nowrap text-white/70">
          <p className="text-3xl font-medium drop-shadow-md">Hello, I am</p>
          <h1 className="text-7xl text-white/80">
            <strong className="drop-shadow-md">Braham Prakash</strong>
          </h1>
          <div className="text-3xl">
            <div className="my-2 drop-shadow-md">
              an experienced Front-End developer
            </div>
            {/* <div className="">and I know how how to do Front-End Stuffs</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
