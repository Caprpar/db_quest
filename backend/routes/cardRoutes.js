const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.get("/cards", cardController.getCards);
router.get("/cards/:id", cardController.getCardById);
router.post("/cards", cardController.createCard);
router.delete("/cards/:id", cardController.deleteCardById);

module.exports = router;
