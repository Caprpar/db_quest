const express = require("express")
const router = express.Router()
const sessionController = require("../controllers/sessionController")

//GET ALL sessions
router.get("/sessions", (req, res) => {})

// GET sessions for user
router.get("/sessions/:user", (req, res) => {
  res.send("hihi")
})

// POST session to database
router.post("/sessions/:id", (req, res) => {
  res.send("im getting a session")
})

// UPDATE session in database
router.put("/sessions/:id", (req, res) => {})

module.exports = router
