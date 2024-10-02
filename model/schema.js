const mongoose = require("mongoose");
// const { Schema, model } = require("mongoose");

//1- Create a Mongoose Schema with the following fields:

// name: String
// age: Number
// gender: String
// exp (experience): Number
// type: String
// qualification: String

//2- Create a Mongoose Model named "Faculty" using the schema defined above.

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is required"],
    maxlength: 100,
  },
  age: {
    type: Number,
    require: [true, "age is required"],
  },
  gender: String,
  experience: Number,
  type: String,
  qualification: String,
});

const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = { Faculty };
