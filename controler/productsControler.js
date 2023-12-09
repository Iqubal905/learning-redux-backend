const productModel = require("../models/productModel");

const postProduct = async(req, res)=>{
    
    let newProduct = new productModel({
        title: req.body.title,
        price: req.body.price,
        details: req.body.details,
        img :req.body.img,
        available : req.body.available
      });
      let result = await newProduct.save();
      console.log(result);
      res.send(result);
}

const getProduct = async (req, res) =>{
  const {id} = req.params;
  const product = await productModel.findById(id)
  res.status(200).json(product)
}
module.exports = { postProduct, getProduct }

