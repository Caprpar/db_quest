const sessionService = require("../services/sessionServices");

async function getAllSessions(req, res) {
  try {
    const sessions = await sessionService.getAllSessions();
    res.status(200).send(sessions);
  } catch {
    res.status(500).send("whoops");
  }
}

module.exports = { getAllSessions };
