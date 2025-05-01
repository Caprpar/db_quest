const connectionMySQL = require("../connectionMySQL");

/*
todo 
function getTags () {}

function getTagById () {}

function createTag () {}

*/

function getTags() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM tags";
    connectionMySQL.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = {
  getTags
  /*   getTagById,
  createTag */
};
