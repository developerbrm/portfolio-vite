const Skeleton = () => (
  <div className="mx-auto grid h-80 w-full max-w-7xl overflow-hidden rounded-lg px-6 md:h-[600px]">
    <div className="skeleton h-full w-full"></div>
  </div>
)

const RenderProjectItemSkeleton = () => {
  return [...Array(3)].map((_, i) => <Skeleton key={i} />)
}

export default RenderProjectItemSkeleton
