const userService = require('../services/user.service');

const getUsers = async (req, res) => {
    const result = await userService.queryUsers(filter, options);
    res.send(result);
  }

module.exports = {
  getUsers,
};