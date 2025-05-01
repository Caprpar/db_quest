const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tagController");

router.get("/tags", tagController.getTags);
/* router.get("/scenes/:id", sceneController.getSceneById);
router.post("/scenes", sceneController.createScene); */

module.exports = router;
