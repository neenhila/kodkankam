import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        var client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
    }
    var clientPromise = global._mongoClientPromise
} else {
    var client = new MongoClient(uri, options)
    var clientPromise = client.connect()
}

export default clientPromise