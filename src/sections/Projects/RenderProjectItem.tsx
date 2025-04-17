import { FiExternalLink } from 'react-icons/fi'
import type { ProjectItem } from '../../../server/db/projects.model'
import RenderProjectImages from './RenderProjectImages'

interface Props {
  project: ProjectItem
  isLoading: boolean
}

const RenderProjectItem = (props: Props) => {
  const { project, isLoading } = props

  const {
    title,
    description,
    imageUrl,
    githubUrl,
    liveUrl,
    imageAlt,
    blurImageUrl,
  } = project

  if (isLoading) {
    return (
      <div className="mx-auto grid h-80 w-full max-w-7xl overflow-hidden rounded-lg px-6 md:h-[600px]">
        <div className="skeleton h-full w-full"></div>
      </div>
    )
  }

  return (
    <div className="relative px-6">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl overflow-hidden rounded-lg shadow-2xl md:h-[600px] md:grid-cols-[500px_1fr]">
        <RenderProjectImages
          imageAlt={imageAlt}
          imageUrl={imageUrl}
          blurImageUrl={blurImageUrl}
          imageStyles="absolute inset-0 -z-0 h-full w-full scale-105 object-cover opacity-100 blur-sm"
        />

        <div className="relative z-10 h-full">
          <RenderProjectImages
            imageAlt={imageAlt}
            imageUrl={imageUrl}
            imageStyles="relative z-10 h-full w-full object-contain object-center"
          />

          <RenderProjectImages
            imageAlt={imageAlt}
            imageUrl={imageUrl}
            imageStyles="absolute inset-0 -z-0 h-full w-full  object-cover blur-xs"
          />
        </div>
        <div className="relative z-10 bg-slate-900/90 p-6 md:p-10">
          <h3 className="text-4xl font-medium opacity-90 md:text-5xl">
            {title}
          </h3>
          <p className="py-6">{description}</p>

          <div className="grid gap-3 md:grid-flow-col md:justify-start">
            <a
              target="_blank"
              href={githubUrl}
              className="btn btn-dash flex items-center gap-2"
            >
              Go to Github Repo
              <FiExternalLink />
            </a>
            <a
              target="_blank"
              href={liveUrl}
              className="btn btn-primary flex items-center gap-2"
            >
              View Latest Build
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RenderProjectItem
