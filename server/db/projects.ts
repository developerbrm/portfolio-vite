import { DB_NAME, mongoClient } from '.'
import type { ProjectItem } from './projects.model'

if (!mongoClient) {
  throw new Error('MongoDB client is not connected')
}

export const getProjects = async () => {
  let projects: ProjectItem[] = []

  console.log('Fetching projects from MongoDB')

  await mongoClient
    .connect()
    .then((client) => client.db(DB_NAME).collection('Projects'))
    .then((collection) => collection.find().toArray())
    .then(
      (data) =>
        (projects = data.map(
          (doc) => ({ ...doc, _id: doc._id.toString() }) as ProjectItem
        ))
    )
    .catch(console.error)
    .finally(() => mongoClient?.close())

  return projects
}
