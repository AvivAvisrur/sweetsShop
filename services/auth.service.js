const { find, add } = require("./mongodb.service");

const findUserBy = async (query) => {
  const userFromDB = await find("user", query);
  console.log(userFromDB);
  return userFromDB.length > 0 ? true : false;
};

const addUser = async (user) => {
  const addedUser = await add("user", user);
  return await addedUser;
};

module.exports = {
  findUserBy,
  addUser,
};
