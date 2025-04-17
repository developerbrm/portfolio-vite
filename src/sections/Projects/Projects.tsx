import { useQuery } from '@tanstack/react-query'
import { fetchProjects } from '../../utilities/utilities'
import RenderProjectItem from './RenderProjectItem'

const Projects = () => {
  const { error, isLoading, data } = useQuery({
    queryFn: fetchProjects,
    queryKey: ['projects'],
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="h-full min-h-screen w-full overflow-hidden bg-linear-to-br from-teal-400 to-teal-500 py-20">
      <div className="mx-auto grid h-full min-h-screen gap-10 text-white">
        <div className="mb-5 justify-self-center rounded-md text-center leading-3 text-nowrap text-white/90 md:text-start">
          <h2 className="text-5xl drop-shadow-md">
            <strong className="font-medium drop-shadow-md">My Projects</strong>
          </h2>
        </div>
        <div className="grid gap-32">
          {data?.map((project) => (
            <RenderProjectItem key={project._id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
