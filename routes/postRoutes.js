const express = require("express");
const userModel = require("../models/usersModels");
const { register, login } = require("../controler/usersControler");
const postRoutes = express.Router();
postRoutes.post("/register", register);
postRoutes.post("/login", login);
module.exports = { postRoutes };
