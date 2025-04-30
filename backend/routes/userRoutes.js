const express = require("express");
const router = express.Router();
const userController = require("../controllers/aController");

router.get("/users", aController.getAllUsers);
router.get("/users/:id", aController.getUserById);
router.post("/users", aController.createUser);
router.put("/users/:id", aController.updateUser);
router.delete("/users/:id", aController.deleteUser);

module.exports = router;
