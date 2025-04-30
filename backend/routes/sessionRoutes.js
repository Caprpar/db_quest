const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

//GET ALL sessions
router.get("/sessions", sessionController.getAllSessions);

// GET sessions by id
router.get("/sessions/:id");

// GET sessions for user
router.get("/sessions/user/:id", (req, res) => {
  res.send("hihi");
});

// GET sessions by tag
router.get("/sessions/tag/:id", (req, res) => {
  res.send("haha");
});

// POST session to database
router.post("/sessions", sessionController.postSession);

// UPDATE session in database
router.put("/sessions/:id", (req, res) => {});

// DELETE session in database
router.delete("/sessions/:id");

module.exports = router;
