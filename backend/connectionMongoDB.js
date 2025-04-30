const mongoose = require("mongoose");

const connectionMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/books");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectionMongoDB;
