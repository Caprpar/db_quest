import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  timout: 5000
});

/**
 * Get card by id
 * @param {cardId} id
 * @returns Card object
 */
export async function getCardById(id) {
  try {
    const response = await api.get(`/cards/${id}`);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}

/**
 * Get all cards from API
 * @returns array of all card objects
 */
export async function getCards() {
  try {
    const response = await api.get(`/cards`);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}

/**
 * Create new card
 * @param {cardObject} card - {cardType, cardName, cardScore, cardDescription, sceneId (not mandatory)}
 * @returns new card object
 */
export async function createCard(card) {
  try {
    const response = await api.post(`/cards`, card);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}

/**
 *
 * @param {cardId} id
 * @param {cardObject} newValues - apply keys with updated values
 * @returns
 */
export async function updateCard(id, newValues) {
  try {
    const response = await api.patch(`/cards/${id}`, newValues);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}

/**
 *
 * @param {cardId} id
 * @returns deleted cardObject
 */
export async function deleteCardById(id) {
  try {
    const response = await api.delete(`/cards/${id}`);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}
