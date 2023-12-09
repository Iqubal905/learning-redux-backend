const userModel = require("../models/usersModels");

const makeAdmin =   async (req, res) => {
   
      const userId = req.params.userId;
      const updatedUser = await userModel.findByIdAndUpdate(userId, { role: 'admin' }, { new: true });
      res.status(200).json(updatedUser)
}
module.exports = makeAdmin