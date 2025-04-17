import { constructImageUrl } from '../../utilities/utilities'

interface Props {
  imageStyles: string
  imageUrl: string
  imageAlt: string
  blurImageUrl?: string
}

const RenderProjectImages = (props: Props) => {
  const { imageUrl, imageAlt, imageStyles, blurImageUrl } = props

  const imageSrc = constructImageUrl(blurImageUrl ?? imageUrl)

  return (
    <img
      alt={imageAlt}
      src={imageSrc}
      className={`${imageStyles} block h-full w-full max-w-full`}
    />
  )
}

export default RenderProjectImages
