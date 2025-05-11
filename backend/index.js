import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnection from "./db/dbConnection.js";
import contentUploader from "./routes/headerRoutes/HederRoutes.js";


const app = express();

// middlewares 
dotenv.config();
app.use(cors());
app.use(express.json())




// base api 
app.get("/", (req , res)=>{
    res.status(400).send({status: 200 , data : 'hello world'})
})

app.use('/content' ,contentUploader )
// db connection 
const URI = process.env.DB_URI
dbConnection(URI)


// server port 
const PORT = process.env.PORT || 8000;
app.listen(PORT , ()=>{
    console.log(`server started ${PORT}`);
})


