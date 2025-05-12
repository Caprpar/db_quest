const sceneService = require("../services/sceneService");

exports.getScenes = async (req, res) => {
  try {
    const scenes = await sceneService.getScenes();
    res.status(200).json({ scenes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSceneById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Scene id required" });
    }
    const scene = await sceneService.getSceneById(id);
    if (!id) {
      return res.status(404).json({ message: "Scene not found" });
    }
    res.status(200).json({ scene });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createScene = async (req, res) => {
  try {
    const { sessionId } = req.body;
    const createdScene = await sceneService.createScene(sessionId);
    res.status(200).json(createdScene);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
