import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 5000
});

export async function getScene() {
  try {
    const response = await api.get(`/scenes`);
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

export async function postCard(scene) {
  try {
    const response = await api.post(`/scenes`, scene);
    return response.data;
  } catch (err) {
    console.log("Fel: ", err);
  }
}
