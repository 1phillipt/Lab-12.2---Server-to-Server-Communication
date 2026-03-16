import dotenv from "dotenv";
import express from "express";

dotenv.config();


const app = express();


app.get("/", (req, res)=>{
  res.send({ fact: "placeholder fact"})
})


