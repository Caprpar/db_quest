const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

//GET ALL sessions
router.get("/sessions", sessionController.getAllSessions);

// GET sessions for user
router.get("/sessions/:user", (req, res) => {
  res.send("hihi");
});

// GET sessions by tag
router.get("/sessions/:tag", (req, res) => {
  res.send("haha");
});

// POST session to database
router.post("/sessions", (req, res) => {
  res.send("im getting a session");
});

// UPDATE session in database
router.put("/sessions/:id", (req, res) => {});

module.exports = router;
