const bcrypt = require("bcrypt").hashSync;
const authService = require("../services/auth.service");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const isUserExists = await authService.findUserBy([
    { email: email },
    { password: password },
  ]);

  console.log("return user", isUserExists);
};

const register = async (req, res, next) => {
  const { email } = req.body;
  //check if user exists in the db
  const isUserExists = await authService.findUserBy({ email: email });
  //consider to check with middleware
  if (!isUserExists) {
    req.body.email = email.toLowerCase();
    req.body.password = bcrypt(req.body.password, 10);
    const user = req.body;
    const addedUser = await authService.addUser(user);
    res.send(`$User signed up!`);
  } else {
    res.send("User already exists!");
  }
};

module.exports = {
  register,
  login,
};
