const Projects = () => {
  return (
    <div className="h-full min-h-screen w-full bg-linear-to-br from-blue-400 to-blue-500 py-20">
      <div className="mx-auto grid h-full min-h-screen max-w-5xl justify-center gap-10 p-6 text-white">
        <div className="mb-5 rounded-md text-center leading-3 text-nowrap text-white/90 md:text-start">
          <h2 className="text-5xl drop-shadow-md">
            <strong className="font-medium drop-shadow-md">My Projects</strong>
          </h2>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotify app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
