const mongoose = require("mongoose");

const PromptSchema = new mongoose.Schema({
  prompts: {
    type: Array
  }
});

module.exports = mongoose.model("prompt", PromptSchema);
