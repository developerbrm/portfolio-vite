export interface PageVisitsInfo {
  userAgent: string
  language: string
  languages: string[]
  referrer: string
  timestamp: Date
  url: string
  platform: string
  height: number
  width: number
  screenOrientation: string
  deviceMemory: number
  connection: string
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
