import dotenv from 'dotenv';
import express from 'express';
const app = express();
import cors from 'cors'
import connectWithMongoDB from './db/connection1.db.js';
import PostRoute from './routes/post.routes.js'

dotenv.config();
// app.use(cors({
//     origin: ["http://localhost:3000" ," https://full-stack-question-bank-mern-7rm3.vercel.app"]
    
// // }));
// const url = process.env.REACT_APP_SERVER_URL
// https://full-stack-question-bank-mern-7rm3-fbabvtuxw.vercel.app

const allowedOrigins = [
    'https://full-stack-question-bank-mern-stack.vercel.app/',
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 3600,
  }));
// const allowedOrigins = ['https://full-stack-question-bank-mern-7rm3-fbabvtuxw.vercel.app'];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

connectWithMongoDB();

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', PostRoute);

app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false,
    })
})
app.listen(8000, () => {
    console.log("Server is listening on port http://localhost:8000");
})