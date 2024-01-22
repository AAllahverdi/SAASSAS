const { Pato } = require("../Models/Pato.model");

const PatoController = {
  getAll: async (req, res) => {
    try {
      const target = await Pato.find();
      res.send(target);
    } catch (error) {
      res.send("item is not found");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const pato = await Pato.findById(id);
      res.send(pato);
    } catch (error) {
      res.send("item is not found");
    }
  },
  Post: async (req, res) => {
    try {
      const { name, desc, image, price } = req.body;
      const NewProduct = new Pato({ name, desc, image, price });
      await NewProduct.save();
      res.send(NewProduct);
    } catch (error) {
      res.send("item is not found");
    }
  },
  delete: async (req, res) => {
    try {
        const {id}=req.params
        await Pato.findByIdAndDelete(id)
res.send("deleted")
    } 
    catch (error) {
      res.send("item is not found");
    }
  },
};
module.exports={PatoController}
