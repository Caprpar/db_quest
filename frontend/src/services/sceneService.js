import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  timout: 5000
});

// Posta kort med sceneId x3
// skapa ny scene spara i sessionstorage

// getScenes
// getSceneById
// createScene

export async function newScene(sessionId) {
  try {
    const response = await api.post(`/scenes`, { sessionId });
    const currentScene = await getSceneById(response.data.insertId);
    sessionStorage.setItem("currentSceneId", currentScene.id);
    console.log(currentScene.scene.id);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}

export async function getSceneById(id) {
  try {
    const response = await api.get(`/scenes/${id}`);
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
 *
 * @param {cardId} id
 * @param {cardObject} newValues - apply keys with updated values
 * @returns
 */
export async function patchCard(id, newValues) {
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
