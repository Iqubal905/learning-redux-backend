const express = require("express");

const router = express.Router();
const path = require("path");
const { getRoutes } = require("./getRoutes");
const { putRoutes } = require("./putRoutes");
const { postRoutes } = require("./postRoutes");
//api routes
router.use("/api/get", getRoutes);
router.use("/api/post", putRoutes);
router.use("/api/put", postRoutes);
//html file routes
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/public/index.html"));
});
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/public/pages/about.html"));
});
router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/public/pages/contact.html"));
});
module.exports = router;
