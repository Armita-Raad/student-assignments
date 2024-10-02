const mongoose = require("mongoose");

// Connect to a Database using Mongoose and a Connection String

const db = async (uri) => {
  try {
    return mongoose.connect(uri);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { db };
