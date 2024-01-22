const express=require("express")
const router=express.Router()
const {PatoController}=require("../Controller/Pato.contrtoller")
router.get("/",PatoController.getAll)
router.get("/:id",PatoController.getById)
router.post("/",PatoController.Post)
router.delete("/:id",PatoController.delete)
module.exports=router