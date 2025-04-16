import type { ObjectId } from 'mongodb'

export interface ProjectItem {
  _id: ObjectId
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  liveUrl: string
}
