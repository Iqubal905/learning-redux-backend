const express = require("express");

const makeAdmin = require('../controler/makeAdminControler')
const putRoutes = express.Router();
putRoutes.get("/", (req, res) => {
  res.send("ola");
  putRoutes.put("/makeAdmin/:id", makeAdmin);
});
module.exports = { putRoutes };
