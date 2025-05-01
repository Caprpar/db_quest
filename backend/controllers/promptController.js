const PromptModel = require("../models/promptModel");

exports.getPrompts = async (req, res) => {
  try {
    const prompts = await PromptModel.find();
    res.status(200).json({ prompts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPromptById = async (req, res) => {
  try {
    const { id } = req.params;
    const prompt = await PromptModel.find({ id: id });
    res.status(200).json({ prompt });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPrompt = async (req, res) => {
  const { prompt } = req.body;
  try {
    const newPrompt = new PromptModel({ prompt });
    newPrompt.save();
    res.status(200).json({ newPrompt });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePromptById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPrompt = await PromptModel.deleteOne({ _id: id });

    res.status(200).json({ deletedPrompt: deletedPrompt });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
