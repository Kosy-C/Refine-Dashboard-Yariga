import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: '50mb' }));
//this means that the limit of all files we'll be sending to the frontend will be 50mb, and not more than that
app.use(cors());

app.get('/', (req, res)=>{
    res.send({ message: 'Hello World' });
})

app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);

const startServer = async()=>{
    try{
        connectDB(process.env.MONGODB_URL);

        app.listen(8080, ()=> console.log('Server started at port http://localhost:8080'));
    } catch(error) {
        console.log(error)
    }
}

startServer();