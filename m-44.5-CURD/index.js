const express = require("express");
const app = express();
const PORT = 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

// Middleware
app.use(express.json());

const uri = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@ac-z7fxnpo-shard-00-00.d8gsbkj.mongodb.net:27017,ac-z7fxnpo-shard-00-01.d8gsbkj.mongodb.net:27017,ac-z7fxnpo-shard-00-02.d8gsbkj.mongodb.net:27017/?ssl=true&replicaSet=atlas-qe1ep9-shard-0&authSource=admin&appName=BackEndWithAnkurVai`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );

    const database = await client.db('CollegeDB')
    const userCollection = database.collection('ph-user')

    app.post('/post', async (req,res)=> {
        try {
            const result = await userCollection.insertOne(req.body)
            res.status(201).json({
                message: 'User info save successful.',
                data: result,
            })
        } catch (err)
        {
            res.status(500).json({
                message: err.message
            })
        }
    })

    app.get('/get', async (req,res)=> {
        try {
            const result = await userCollection.find({}).toArray()
            res.status(200).json({
                message: 'user data fetch successful.',
                data: result
            })
        }catch(err)
        {
            res.status(400).json({
                message: err.message
            })
        }
    })
 
  } catch (err) {
    console.log(err.message);
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port.`);
});
