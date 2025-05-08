/**
 * Creates a card object
 * @param {string} cardType
 * @param {number} cardScore
 * @param {string} cardName - standard null
 * @param {string} cardDescription - standard null
 * @returns
 */
export function createCard(cardType, cardScore, cardName = null, cardDescription = null) {
  return {
    cardType,
    cardScore,
    cardName,
    cardDescription
  };
}
/**
 * Genearates a sorted deck containing 10 aid cards, 10, solution cards, 26 problem cards
 * @param {Number} deckAmount
 * @returns sorted deck
 */
export function createDeck(deckAmount = 1) {
  const aidAmount = 10;
  const solutionAmount = 10;
  const problemAmount = 13;
  let deck = [];
  // insert aid
  for (let score = 1; score <= aidAmount; score++) {
    deck.push(createCard("aid", score));
  }
  for (let score = 1; score <= solutionAmount; score++) {
    deck.push(createCard("solution", score));
  }
  for (let score = 1; score <= problemAmount; score++) {
    deck.push(createCard("problem", score));
    deck.push(createCard("problem", score));
  }
  return deck;
}

/**
 * Shufffle deck
 * @param {deckArray} deck
 * @returns shuffled deck
 */
export function shuffleDeck(deck) {
  for (const [index, card] of Object.entries(deck)) {
    const random = Math.floor(Math.random() * (1 + (deck.length - index)));
    [deck[index], deck[random]] = [deck[random], deck[index]];
  }
  return deck;
}

/**
 * Draws top card from deck and remove it from deck array
 * @param {deckArray} deck
 * @returns card
 */
export function drawFromDeck(deck) {
  return deck.shift();
}
