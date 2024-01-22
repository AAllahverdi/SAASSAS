const mongoose=require("mongoose")
const Pato=mongoose.model("pato",new mongoose.Schema({
    name:String,
    desc:String,
    image:String,
    price:Number


}))
module.exports={Pato}