const cardService = require("../services/cardService");

exports.getCards = async (req, res) => {
  try {
    const { type, scene } = req.query;
    console.log(req.query);
    if (type) {
      const typeArray = type.split(",").map((t) => t.trim().toLowerCase());
      const filteredCards = await cardService.findByType(typeArray);
      console.log(filteredCards);
      return res.json({ filteredCards });
    }
    if (scene) {
      const sceneCards = await cardService.getSceneCards(scene);
      return res.json({ sceneCards });
    }
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
    res.status(200).json({ message: "Card created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    // get old values
    const updatedValue = await cardService.getCardById(id);

    // compares old values with new values and updates to new ones
    for (const [key, value] of Object.entries(req.body)) {
      if (updatedValue[key] != req.body[key]) {
        updatedValue[key] = value;
      }
    }

    // updatesCard using id with updated values
    const updatedCard = await cardService.updateCard(
      updatedValue.cardType,
      updatedValue.cardName,
      updatedValue.cardScore,
      updatedValue.cardDescription,
      id
    );
    res.status(200).json({ message: "Card updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await cardService.deleteCardById(id);
    res.status(200).json({ message: "Card deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
