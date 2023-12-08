const express = require("express");
const putRoutes = express.Router();
putRoutes.get("/", (req, res) => {
  res.send("ola");
});
module.exports = { putRoutes };
