import { MongoClient } from 'mongodb'
const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  )
}

console.log('Trying to connect to MongoDB')

export const mongoClient: MongoClient | null =
  (await MongoClient.connect(MONGODB_URI)
    .then((client) => {
      console.log('Connected to MongoDB')

      return client
    })
    .catch(console.error)) ?? null

export const DB_NAME = 'Portfolio'
