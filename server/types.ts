export interface PageVisitInfo {
  userAgent: string
  language: string
  languages: readonly string[]
  referrer: string
  timestamp: string
  url: string
  platform: string | null
  height: number
  width: number
  screenOrientation: string
  deviceMemory: number | null
  connection: string | null
  triggeredBy: string
}

export interface ProjectItem {
  _id: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  blurImageUrl: string
  githubUrl: string
  liveUrl: string
}
