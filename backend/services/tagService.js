const connectionMySQL = require("../connectionMySQL");

/*
todo 

function getTagById () {}

function createTag () {}

*/

function getTags() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM tag";
    connectionMySQL.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

function getTagById(id) {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM tag WHERE id = ?";
    const params = [id];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
}

module.exports = {
  getTags,
  getTagById
};
