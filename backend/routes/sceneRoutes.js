const express = require("express");
const router = express.Router();
const sceneController = require("../controllers/sceneController");

router.get("/scenes", sceneController.getScenes);
router.get("/scenes/:id", sceneController.getSceneById);
router.post("/scenes", sceneController.createScene);

module.exports = router;
