const mongoose = require("mongoose");

const PromptSchema = new mongoose.Schema({
  prompt: {
    type: String
  }
});

module.exports = mongoose.model("prompt", PromptSchema);
