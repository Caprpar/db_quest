const tagService = require("../services/tagService");

exports.getTags = async (req, res) => {
  try {
    const tags = await tagService.getTags();
    res.status(200).json({ tags });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTagById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Tag id required" });
    }
    const tag = await tagService.getTagById(id);
    if (!id) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json({ tag });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
