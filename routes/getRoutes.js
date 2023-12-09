const express = require("express");
const getRoutes = express.Router();
const getProduct = require("../controler/productsControler")
getRoutes.get("/", (req, res) => {
  res.send("ola");
  getRoutes.post("/getProduct/:id", getProduct);
});


module.exports = { getRoutes };
