const connectionMySQL = require("../connectionMySQL");

function getAllSessions() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM session";
    let params = [];
    connectionMySQL.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function getSessionsById(id) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM session WHERE session.id = ?`;
    let params = [id];
    connectionMySQL.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function getSessionsByTag(tags) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM 
      ((session 
      INNER JOIN sessionTag on session.id = sessionTag.sessionId) 
      INNER JOIN tag ON sessionTag.tagId = tag.id) 
      WHERE tag.id IN (?)`;
    let params = tags;
    connectionMySQL.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function getSessionsByUser(userid) {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM session WHERE session.userId = ?";
    let params = [userid];
    connectionMySQL.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function postSession(prompt, narrative, userid) {
  return new Promise((resolve, reject) => {
    let sql =
      "INSERT INTO session (prompt, narrative, userid) VALUES (?, ?, ?)";
    let params = [prompt, narrative, userid];
    connectionMySQL.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function updateSession() {
  return new Promise((resolve, reject) => {
    let sql = "";
    let params = [];
    connectionMySQL.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function deleteSession(id) {
  return new Promise((resolve, reject) => {
    let sql = ``;
    let params = [id];
    connectionMySQL.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = {
  getAllSessions,
  getSessionsById,
  getSessionsByUser,
  getSessionsByTag,
  postSession,
  updateSession,
  deleteSession
};
