import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  timout: 5000
});

// get card
export async function getCardById(id) {
  try {
    const response = await api.get(`/cards/${id}`);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}

// get cards
export async function getCards() {
  try {
    const response = await api.get(`/cards`);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}

// post card
export async function createCard(card) {
  //  card has to be an object containing {cardType, cardName, cardScore, cardDescription, sceneId (ej obligatorisk)}
  try {
    const response = await api.post(`/cards`, card);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}

// patch card
export async function updateCard(id, newValues) {
  //  newValues is an object containg updated value from following {cardType, cardName, cardScore, cardDescription}
  try {
    const response = await api.patch(`/cards/${id}`, newValues);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}

// delete card
export async function deleteCardById(id) {
  try {
    const response = await api.delete(`/cards/${id}`);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}
