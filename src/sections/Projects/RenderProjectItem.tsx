import { FiExternalLink } from 'react-icons/fi'
import type { ProjectItem } from '../../../server/db/projects.model'
import RenderImage from './RenderImage'

interface Props {
  project: ProjectItem
}

const RenderProjectItem = (props: Props) => {
  const { project } = props

  const {
    title,
    description,
    imageUrl,
    githubUrl,
    liveUrl,
    imageAlt,
    blurImageUrl,
  } = project

  return (
    <div className="relative px-6">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl overflow-hidden rounded-lg shadow-2xl md:h-[600px] md:grid-cols-[500px_1fr]">
        <RenderImage
          imageAlt={imageAlt}
          imageUrl={imageUrl}
          blurImageUrl={blurImageUrl}
          lazyLoad={true}
          imageStyles="absolute inset-0 -z-0 h-full w-full scale-105 object-cover opacity-100 blur-sm"
        />

        <div className="relative z-10 h-full">
          <RenderImage
            imageAlt={imageAlt}
            imageUrl={imageUrl}
            imageStyles="relative z-10 h-full w-full object-contain object-center"
          />

          <RenderImage
            imageAlt={imageAlt}
            imageUrl={imageUrl}
            lazyLoad={true}
            imageStyles="absolute inset-0 -z-0 h-full w-full  object-cover blur-xs"
          />
        </div>
        <div className="relative z-10 bg-slate-900/90 p-6 md:p-10">
          <h3 className="text-4xl font-medium opacity-90 md:text-5xl">
            {title}
          </h3>
          <p className="py-6">{description}</p>

          <div className="grid gap-3 lg:grid-flow-col lg:justify-start">
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
