import dotenv from "dotenv";
import express from "express";
import axios from 'axios';


dotenv.config();


const app = express();

const PORT = 3008;


app.get("/", (req, res)=>{
  res.send("server is running")
})


app.get("/api/fun-facts", async (req, res)=>{
  try{
    const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
  res.json({ fact: response.data.text });
  }catch (error){
    res.status(500).json({error: "could not fetch fun fact"})
  }
})
app.listen(PORT,() =>{console.log(`Server is running on http://localhost:${PORT}`);})
