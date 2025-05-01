const express = require("express");
const router = express.Router();
const promptController = require("../controllers/promptController");

router.get("/prompts", promptController.getPrompts);
router.get("/prompts/:id", promptController.getPromptById);
router.post("/prompts", promptController.createPrompt);
// router.patch("/prompts/:id", promptController.updatePrompt);
router.delete("/prompts/:id", promptController.deletePromptById);

module.exports = router;
