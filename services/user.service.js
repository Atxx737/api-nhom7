const User = require('../models/user.model');

const getAllUsers = async () => {
  const users = await User.find({});
  return users;
};

module.exports = {
  getAllUsers,
};