const sessionService = require("../services/sessionService");

async function getAllSessions(req, res) {
  try {
    console.log("test");
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
    console.log(req.body);
    console.log(tags);
    console.log("test");
    const sessions = await sessionService.getSessionsByTag(tags);
    console.log(sessions);
    res.status(200).send("hihi");
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getFinishedSession(req, res) {
  try {
    console.log("test");
    const sessions = await sessionService.getFinishedSession();
    res.status(200).send(sessions);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postSession(req, res) {
  try {
    const { sessionTitle, sessionPrompt, sessionNarrative, sessionUserId } =
      req.body;
    const result = await sessionService.postSession(
      sessionTitle,
      sessionPrompt,
      sessionNarrative,
      sessionUserId
    );
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

async function addTagToSession(req, res) {
  try {
    const { sessionId, tagId } = req.body;
    const result = await sessionService.addTagToSession(sessionId, tagId);
    res.status(200).send("tag added to session");
  } catch (err) {
    res.status(400).send("adding tag failed");
  }
}

async function updateSession(req, res) {
  try {
    // const { narrative } = req.body;
    const updatedSession = await sessionService.updateSession(
      req.body,
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
  addTagToSession,
  updateSession,
  deleteSession,
  deleteSessionCascade,
  getFinishedSession
};
