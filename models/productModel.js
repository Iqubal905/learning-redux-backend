const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  available: {
    type: Number,
    required: true,
  },
});
const productModel = new mongoose.model("products", productSchema);
module.exports = productModel;
