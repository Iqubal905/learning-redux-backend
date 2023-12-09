const express = require("express");
const userModel = require("../models/usersModels");
const { register, login } = require("../controler/usersControler");
const { postProduct } = require("../controler/productsControler")
const postRoutes = express.Router();
postRoutes.post("/register", register);
postRoutes.post("/login", login);
postRoutes.post("/postProduct", postProduct);
module.exports = { postRoutes };
