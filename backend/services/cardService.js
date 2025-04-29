const connectionMySQL = require("../connectionMySQL");

function getCards() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM card";
    connectionMySQL.query(sql, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

function getCardById(id) {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM card WHERE id = ?";
    const params = [id];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
}

function createCard(cardType, cardName, cardScore, cardDescription) {
  return new Promise((resolve, reject) => {
    let sql = `
    INSERT INTO card(cardType, cardName, cardScore, cardDescription)
    value (?, ?, ?, ?)
    `;
    const params = [cardType, cardName, cardScore, cardDescription];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
}

function deleteCardById(id) {
  return new Promise((resolve, reject) => {
    let sql = `
    DELETE FROM sceneCard WHERE cardId = ?;
    DELETE FROM card WHERE id = ?;
    `;
    const params = [id, id];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
}

module.exports = {
  getCards,
  getCardById,
  createCard,
  deleteCardById
};
