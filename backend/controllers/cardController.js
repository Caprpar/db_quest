const cardService = require("../services/cardService");

exports.getCards = async (req, res) => {
  try {
    const cards = await cardService.xx();
    res.status(200).json({ cards });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getCardBy = async (req, res) => {
  try {
    const card = await cardService.xx();
    res.status(200).json({ card });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.createCard = async (req, res) => {
  try {
    const createdCard = await cardService.xx();
    res.status(200).json({ createdCard });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deleteCardById = async (req, res) => {
  try {
    const deletedCard = await cardService.xx();
    res.status(200).json({ deletedCard });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
