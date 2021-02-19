const usersCtrl = {};

const { User } = require("../models");

usersCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

usersCtrl.createUser = async (req, res) => {
  const { username, firstname, lastname } = req.body;
  const newUser = new User({
    username,
    firstname,
    lastname,
  });
  await newUser.save();
  console.log(newUser);
  res.json({ message: "User saved" });
};

usersCtrl.deleteUser = async (req, res) => {
  await User.findOneAndDelete(req.params.id);
  res.json({ message: "User Deleted" });
};

module.exports = usersCtrl;
