const bcrypt = require("bcrypt").hashSync;

const register = (res, req, next) => {
  const { email, password } = req.body;
  //check if user exists in the db

  //consider to check with middleware
  req.body.email = email.toLowerCase();

  req.body.password = bcrypt(req.body.password, 10);

  const user = req.body;

  //send the user to the DB

  res.send("User signed up!");
};
