import { FiExternalLink } from 'react-icons/fi'
import type { ProjectItem } from '../../../server/db/projects.model'
import { constructImageUrl } from '../../utilities/utilities'

interface Props {
  project: ProjectItem
}

const RenderProjectItem = (props: Props) => {
  const { title, description, imageUrl, githubUrl, liveUrl, imageAlt } =
    props.project

  const imageSrc = constructImageUrl(imageUrl)

  return (
    <div className="relative px-6 md:h-screen">
      <div className="relative z-10 grid gap-10 md:grid-cols-[300px_1fr]">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="h-full w-full rounded-lg object-contain shadow-2xl"
        />
        <div>
          <h3 className="text-4xl font-medium opacity-90">{title}</h3>
          <p className="py-6">{description}</p>

          <div className="flex gap-3">
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
      {/* <img
        alt={imageAlt}
        src={imageSrc}
        className="absolute inset-0 -z-0 h-full w-full scale-200 object-cover opacity-100 blur-3xl"
      /> */}
    </div>
  )
}

export default RenderProjectItem
