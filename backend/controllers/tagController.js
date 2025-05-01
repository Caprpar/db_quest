const tagService = require("../services/tagService");

exports.getTags = async (req, res) => {
  try {
    const tags = await tagService.getTags();
    res.status(200).json({ tags });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
