import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from "dotenv";
import { connectUsingMongoose} from './Config/mongoose.js';
import userRouter from "./routes/user.routes.js"
import CompanyRouter from './routes/company.routes.js';
import JobRouter from "./routes/job.routes.js"
import ApplicationRouter from './routes/application.routes.js';


dotenv.config();

const server=express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};
server.use(cors(corsOptions));

server.get('/home',(req,res)=>{
    res.status(200).json({
message:"I am coming from backend",
success:true
})
});


server.use("/api/v1/user",userRouter);
server.use("/api/v1/company",CompanyRouter);
server.use("/api/v1/job",JobRouter);
server.use("/api/v1/application",ApplicationRouter);


const PORT = process.env.PORT;



server.listen(PORT, () => {

    connectUsingMongoose();
    console.log(`Server Running at port ${PORT}`);
});
