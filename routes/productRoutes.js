const router = require("express").Router();


//add to cart
router.post("/cart")
//delete specific item
router.delete("/cart/:id")
//delete all items from cart
router.delete("/cart")
//get cart
router.get("/cart")
//getOrders
router.get("/orders")
//set order
router.post("/order")

module.exports = router;
