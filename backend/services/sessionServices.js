const connectionMySQL = require("../connectionMySQL");

function getAllSessions() {
  connectionMySQL.query("SELECT * FROM session");
}

function getSessionsByTag() {}

module.exports = {};
