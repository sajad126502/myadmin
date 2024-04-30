require('dotenv').config({path:__dirname+'/../../.env'})
const express=require("express")
const app=express()
const cors = require("cors");
const port=process.env.PORT || 8000
app.use(cors())
app.get("/api",(req,res)=>{
res.json({name:"sajad"})
})
app.listen(port,()=>{
    console.log("🟢 Server listen on port"+port)
})