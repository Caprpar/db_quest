const sessionService = require("../services/sessionServices");

async function getAllSessions(req, res) {
  try {
    const sessions = await sessionService.getAllSessions();
    res.status(200).send(sessions);
  } catch (error) {
    res.status(500).send("whoops");
  }
}

async function getSessionsById(req, res) {
  try {
    const id = req.params.id;
    const sessions = await sessionService.getSessionsById(id);
    res.status(200).send(sessions);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getSessionsByUser(req, res) {
  try {
    const sessions = await sessionService.getSessionsByUser(req.params.id);
    res.status(200).send(sessions);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getSessionsByTag(req, res) {
  try {
    const { tags } = req.body;
    const sessions = await sessionService.getSessionsByTag(tags);
    res.status(200).send(sessions);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postSession(req, res) {
  try {
    const { sessionPrompt, sessionNarrative, sessionUserId } = req.body;
    const result = await sessionService.postSession(
      sessionPrompt,
      sessionNarrative,
      sessionUserId
    );
    res.status(200).send("session Created");
  } catch (err) {
    console.log(err);
    res.status(400).send("oop oop");
  }
}

async function updateSession(req, res) {
  try {
    const { narrative } = req.body;
    const updatedSession = await sessionService.updateSession(
      narrative,
      req.params.id
    );
    res.status(200).send(updatedSession);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteSessionCascade(req, res) {
  try {
    const deleteResult = await sessionService.deleteSessionCascade(
      req.params.id
    );
    res.status(200).send(deleteResult);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteSession(req, res) {
  try {
    const deleteResult = await sessionService.deleteSession(req.params.id);
    res.status(200).send(deleteResult);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getAllSessions,
  getSessionsById,
  getSessionsByTag,
  getSessionsByUser,
  postSession,
  updateSession,
  deleteSession,
  deleteSessionCascade
};
