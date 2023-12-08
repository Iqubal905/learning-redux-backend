const express = require("express");
const app = express();
const port = process.env.Port || 3000;
const routes = require("./routes/routes");
const path = require("path");
const { default: mongoose } = require("mongoose");
// middlewere
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));
//db and mongoose connect
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@ocircleo.zgezjlp.mongodb.net/redux?retryWrites=true&w=majority`
);
//routes and others
app.use("/", routes);
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "./views/public/pages/error.html"));
});

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
});
