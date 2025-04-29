const connectionMySQL = require("../connectionMySQL");

function example() {
  return new Promise((resolve, reject) => {
    // if err  reject(err)
    // else resolve(result)
  });
}

function getAllSessions() {
  new Promise((resolve, reject) => {
    let sql = "SELECT * FROM session";
    let params = [];
    connectionMySQL.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function getSessionsByTag(tag) {}

function getSessionsByUser(userid) {}

module.exports = { getAllSessions };
