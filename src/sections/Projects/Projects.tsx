const Projects = () => {
  return (
    <div className="h-full min-h-screen w-full overflow-hidden bg-linear-to-br from-blue-400 to-blue-500 py-20">
      <div className="mx-auto grid h-full min-h-screen gap-10 text-white">
        <div className="mb-5 justify-self-center rounded-md text-center leading-3 text-nowrap text-white/90 md:text-start">
          <h2 className="text-5xl drop-shadow-md">
            <strong className="font-medium drop-shadow-md">My Projects</strong>
          </h2>
        </div>

        <div className="hero relative min-h-screen">
          <div className="hero-content relative z-10 flex-col lg:flex-row">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>

          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="absolute inset-0 -z-0 h-full w-full scale-200 object-cover opacity-100 blur-3xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
