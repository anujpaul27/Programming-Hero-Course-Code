import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@ac-z7fxnpo-shard-00-00.d8gsbkj.mongodb.net:27017,ac-z7fxnpo-shard-00-01.d8gsbkj.mongodb.net:27017,ac-z7fxnpo-shard-00-02.d8gsbkj.mongodb.net:27017/?ssl=true&replicaSet=atlas-qe1ep9-shard-0&authSource=admin&appName=BackEndWithAnkurVai`);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    emailAndPassword: { 
    enabled: true, 
  },
    client
  }),
});
