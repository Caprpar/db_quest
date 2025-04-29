const cardService = require("../services/cardService");

exports.getCards = async (req, res) => {
  try {
    const cards = await cardService.getCards();
    res.status(200).json({ cards });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCardById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "card id is required" });
    }
    const card = await cardService.getCardById(id);
    if (!card) {
      return res.status(404).json({ message: "card not found" });
    }
    res.status(200).json({ card });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCard = async (req, res) => {
  try {
    const { cardType, cardName, cardScore, cardDescription } = req.body;
    const createdCard = await cardService.createCard(
      cardType,
      cardName,
      cardScore,
      cardDescription
    );
    res.status(200).json({ createdCard });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await cardService.deleteCardById(id);
    res.status(200).json({ deletedCard });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
