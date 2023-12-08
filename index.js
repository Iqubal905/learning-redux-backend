const express = require("express");
const app = express();
const port = process.env.Port || 3000;
const routes = require("./routes/routes");
const path = require("path");
// middlewere
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));
//routes and others

app.use("/", routes);
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./views/public/pages/error.html"));
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
