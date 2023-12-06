const express = require("express");

const { getUsers, saveUsers, addUsers } = require("../controler/usersControler");

const router = express.Router();

router.get("/users", getUsers);

router.get("/addUsers", addUsers);

router.post("/viewUsers", saveUsers);

module.exports = router;