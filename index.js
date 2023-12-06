const { log } = require("console");
const express = require("express")

const useRouter = require('./routes/userRouts')

const app = express()
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(useRouter)




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri =  "mongodb+srv://iqubal:Yalx2ZcaPzR5gilH@cluster0.bohlojw.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);









app.use((req, res, next) => {
    res.status(404).json({
      message: "resource not found",
    });
  });



app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
  });