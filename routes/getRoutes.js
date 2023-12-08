const express = require("express");
const getRoutes = express.Router();
getRoutes.get("/", (req, res) => {
  res.send("ola");
});
module.exports = { getRoutes };
