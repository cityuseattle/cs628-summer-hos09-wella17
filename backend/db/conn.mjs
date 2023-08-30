import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "mongodb+srv://adobo123:manila123@adobo.v2otfaj.mongodb.net/";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("hos08");

export default db;