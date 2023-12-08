const userModel = require("../models/usersModels");
const bcrypt = require("bcrypt");
const register = async (req, res, next) => {
  let body = req.body;
  let { name, email, password } = body;
  const findUser = await userModel.findOne({ email: email });
  if (findUser) {
    res.send({
      error: true,
      message: "user already exits",
    });
    return;
  }
  try {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (hash) {
        let newUser = new userModel({
          name,
          email,
          password: hash,
        });
        let result = await newUser.save();
        res.send(result);
        return;
      }
      res.send({
        error: true,
        message: err,
      });
    });
  } catch (error) {
    res.send({
      error: true,
      message: error,
    });
  }
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  const findUser = await userModel.findOne({ email: email });
  if (findUser) {
    bcrypt.compare(password, findUser.password, function (err, result) {
      if (result) {
        res.send(findUser);
        return;
      }
      res.send({
        error: true,
        message: err,
      });
      return;
    });
    return;
  }
  res.send(findUser);
};
module.exports = { register, login };
