const router = require("express").Router();

//update user
router.put("/update");
//get specific user(admin only)
router.get("/getUser/:id");
//get all the users
router.get("/getUsers");

module.exports = router;
