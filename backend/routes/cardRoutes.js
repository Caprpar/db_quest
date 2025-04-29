const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.get("/cards", cardController.getCards);
router.get("/cards/:id", cardController.getCardBy);
router.post("/cards", cardController.createCard);
router.delete("/cards", cardController.deleteCardById);

module.exports = router;
