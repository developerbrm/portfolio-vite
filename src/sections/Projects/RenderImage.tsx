import { constructPubicMediaUrl } from '../../utilities/utilities'

interface Props {
  imageStyles: string
  imageUrl: string
  imageAlt: string
  blurImageUrl?: string
  lazyLoad?: boolean
}

const RenderImage = (props: Props) => {
  const { imageUrl, imageAlt, imageStyles, blurImageUrl, lazyLoad } = props

  const imageSrc = constructPubicMediaUrl(blurImageUrl ?? imageUrl)

  return (
    <img
      alt={imageAlt}
      src={imageSrc}
      loading={lazyLoad ? 'lazy' : 'eager'}
      className={`${imageStyles} block h-full w-full max-w-full`}
    />
  )
}

export default RenderImage
