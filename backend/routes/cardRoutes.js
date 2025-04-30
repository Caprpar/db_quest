const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.get("/cards", cardController.getCards());
router.get("/cards/:id", cardController.getCardBy(id));
router.post("/cards", cardController.createCard(cType, cName, cScore, cDescription));

module.exports = router;
