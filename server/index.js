// in packge.json add type:module
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import userRoutes from "./routes/user.js";

// if in connect str , if password have special char need to decode it
// ex for %40 is for @

const app = express()
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors())



app.use('/posts', postRoutes)
app.use("/user", userRoutes);
const CONNECTION_URL = 'mongodb+srv://numan123:numan%40786@cluster0.th2fu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,{
     useNewUrlParser: true,
      useUnifiedTopology: true,})
      .then(()=> app.listen(PORT,()=> console.log(`running at ${PORT}` )))
.catch((err)=> console.log(err))

// mongoose.set('useFindAndModify',false);