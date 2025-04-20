import { MongoClient, ServerApiVersion } from 'mongodb';
export const collectionObj = {
  servicecollection : "services_collectiion",
  usecollection : "user_collection"

}
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export default function bdconnect(collectionname){
const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  return client.db(process.env.DB_NAME).collection(collectionname)
 }
