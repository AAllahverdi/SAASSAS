const express=require("express")
const app=express()
const PatoRouter=require("./Router/Pato.routes")
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT || 8000
app.use(express.json())
mongoose.connect("mongodb+srv://tu7ljr8ww:Allahverdi123@cluster0.hlwgpfm.mongodb.net/").then(res=>{
    console.log("connected to mongo")
})
app.use("/pato",PatoRouter)
app.listen(PORT,()=>{
    console.log("back running on 4321")
})