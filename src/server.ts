import dotenv from "dotenv";
import express from "express";

dotenv.config();


const app = express();

const PORT = 3008;


app.get("/", (req, res)=>{
  res.send({ fact: "placeholder fact"})
})

app.listen(PORT,() =>{console.log(`Server is running on http://localhost:${PORT}`);})
