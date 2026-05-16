const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')


//Middleware 
app.use(express.json())
app.use(cors())



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = await client.db('CollegeDB')
    const userModel = db.collection('ph-user')

    // CREATE: Insert a new document
    app.post('/post', async (req,res)=> {

        const result = await userModel.insertOne(req.body)
        res.status(201).json({
            message: 'Post request successful',
            data: result
        })
    })

    app.get('/', (req,res)=> 
    {
      res.send('Server is running')
    })

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
    
  }
}
run().catch(console.dir);


app.listen(5000, ()=> {
    console.log('Server running on the 5000 port');
})