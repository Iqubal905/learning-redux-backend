const express = require("express");
const postRoutes = express.Router();
postRoutes.get("/", (req, res) => {
  res.send("ola");
});
module.exports = { postRoutes };
