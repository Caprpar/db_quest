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

function findByType(typeArray) {
  return new Promise((resolve, reject) => {
    // selects first index of typeArray
    let sql = `
      SELECT * FROM card
      WHERE cardType LIKE "%${typeArray[0]}%"
    `;
    // append sql query for each type if array has more than one index
    if (typeArray[1]) {
      typeArray.splice(1).forEach((type) => {
        sql += ` OR cardType LIKE "%${type}%"`;
      });
    }
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

function getSceneCards(sceneid) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM card
    JOIN sceneCard ON sceneCard.cardId = card.id
    WHERE sceneCard.sceneId = ?`;
    const params = [sceneid];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results);
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
      else resolve(results);
    });
  });
}

function updateCard(cardType, cardName, cardScore, cardDescription, id) {
  return new Promise((resolve, reject) => {
    let sql = `
    UPDATE card SET cardType = ?, cardName = ?, cardScore = ?, cardDescription = ? where card.id = ?
    `;
    const params = [cardType, cardName, cardScore, cardDescription, id];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
}

function deleteCardById(id) {
  return new Promise((resolve, reject) => {
    let sql = `
    -- DELETE FROM sceneCard WHERE cardId = ?;
    DELETE FROM card WHERE id = ?;
    `;
    const params = [id, id];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
}

function addCardToScene(cardId, sceneId) {
  return new Promise((resolve, reject) => {
    let sql = `
    INSERT INTO sceneCard(sceneId, cardId)
    values (?, ?)
    `;
    const params = [sceneId, cardId];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
}

module.exports = {
  getCards,
  findByType,
  getCardById,
  createCard,
  deleteCardById,
  updateCard,
  getSceneCards,
  addCardToScene
};
