const User = require('../models/user.model');

const queryUsers = async (filter, options) => {
  const users = await User.find({});
  return users;
};

module.exports = {
  queryUsers,
};