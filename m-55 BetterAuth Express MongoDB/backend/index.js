const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const {createRemoteJWKSet, jwtVerify}  = require('jose-cjs')

//Middleware 
app.use(express.json())
app.use(cors())

const JWTK = createRemoteJWKSet(
  new URL('http://localhost:3000/api/auth/jwks')
)

// User Token verify middleware
const userTokenVerify = async (req,res,next)=>
{
  const token = req.headers.token;

  if (!token)
  {
    return res.status(401).json({
      message: 'Invalid User'
    })
  }

  try{
    const {payload} = await jwtVerify(token,JWTK)
    if (payload)
    {
      next()
    }
  }catch (err)
  {
    res.status(401).json({
      message: 'invalid User'
    })
  }
}


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        try 
        {
          const result = await userModel.insertOne(req.body)
          res.status(201).json({
              message: 'Post request successful',
              data: result
          })
        }
        catch (err)
        {
          res.status(403).json({
            message: err.message
          })
        }
    })

    // READ: get the form the DB
    app.get('/alluser',userTokenVerify, async (req,res)=> {
      
      try 
      {
        const allUser = await userModel.find({}).toArray()
        res.status(201).json({
          message: 'user fetch successful.',
          data: allUser,
        })
      }
      catch(err)
      {
        res.status(403).json({
          message: err.message
        })
      }
    })

    // UPDATED data 
    app.put('/updated/:id', async (req,res)=> {
      const query = new ObjectId(req.params.id)
      try 
      {
        const response = await userModel.findOneAndUpdate(query, {$set: req.body})
        res.status(200).json({
          message: 'Update successful.',
          data: response
        })
      }
      catch(err)
      {
        res.status(403).json({
          message: err.message
        })
      }
    })

    // Delete data with id 
    app.delete('/delete/:id ', async (req,res)=> {
      const query = new ObjectId(req.params.id)
      try
      {
        const response = await userModel.deleteOne(query)

        if (response.ok)
        {
          res.status(200).json({
            message: 'Delete Successful'
          })
        }
      }
      catch (err)
      {
        res.status(403).json({
          message: err.message
        })
      }
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