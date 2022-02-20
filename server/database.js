import { config as envConfig } from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
envConfig();

const uri = `mongodb+srv://root:${process.env.MONGODB_PASSWORD}@chenicluster.fu7mm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});
const db = client.db('my_db');

export { client, db };
