import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  timout: 5000
});
/**
 *
 * @param {number} sessionId
 * @returns created scene information
 */
export async function newScene(sessionId) {
  try {
    const response = await api.post(`/scenes`, { sessionId });
    const currentScene = await getSceneById(response.data.insertId);
    sessionStorage.setItem("currentSceneId", currentScene.id);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}

/**
 *
 * @param {number} id
 * @returns scene
 */
export async function getSceneById(id) {
  try {
    const response = await api.get(`/scenes/${id}`);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}
