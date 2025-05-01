const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

//GET ALL sessions
router.get("/sessions", sessionController.getAllSessions);

// GET sessions by id
router.get("/sessions/:id", sessionController.getSessionsById);

// GET sessions for user
router.get("/sessions/user/:id", sessionController.getSessionsByUser);

// GET sessions by tag
router.get("/sessions/tags", sessionController.getSessionsByTag);

// POST session to database
router.post("/sessions", sessionController.postSession);

router.post("/session/addtagtosession", sessionController.addTagToSession);

// UPDATE session in database
router.put("/sessions/:id", sessionController.updateSession);

// DELETE session in database
router.delete("/sessions/:id", sessionController.deleteSession);

router.delete("/sessions/cascade/:id", sessionController.deleteSessionCascade);

module.exports = router;
