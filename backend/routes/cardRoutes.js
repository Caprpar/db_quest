const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.get("/cards", cardController.getCards());
router.get("/cards/:id", cardController.getCardBy(id));
router.post("/cards", cardController.createCard(cType, cName, cScore, (cDescription = "")));
router.delete("/cards", cardController.deleteCardById(id));

module.exports = router;
