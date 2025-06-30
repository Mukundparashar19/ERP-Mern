const mongoose = require("mongoose");

const productdatapattern = mongoose.Schema({
  brand: String,
  category: String,
  description: String,
  email: String,
  mobno: String,
  price: String,
  productName: String,
  servise: String,
  shipping: String,
  img: String
});

const myproductschimatype = mongoose.model('userproduct',productdatapattern)

module.exports = myproductschimatype