import { mongoClient } from '.'
import type { ProjectItem } from './projects.model'

if (!mongoClient) {
  throw new Error('MongoDB client is not connected')
}

const projectsCollection = mongoClient.db('Projects').collection('Projects')
export const projects = (await projectsCollection.find().toArray()).map(
  (doc) => ({ ...doc, _id: doc._id.toString() }) as ProjectItem
)
