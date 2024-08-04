import dotenv from 'dotenv';
import express from 'express';
const app = express();
import cors from 'cors'
import connectWithMongoDB from './db/connection1.db.js';
import PostRoute from './routes/post.routes.js'

dotenv.config();
app.use(cors({
    origin: ["http://localhost:3000" ," https://full-stack-question-bank-mern-7rm3.vercel.app"]
    
}));

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