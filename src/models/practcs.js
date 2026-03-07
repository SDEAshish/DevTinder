// userSchema

const mongoose = require("mongoose");
const { use } = require("react");

//schema

// mongoose.Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  emailID: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//creating models

/*
1st way to create model
const User = mongoose.model("User", userSchema);

//exporting

module.exports = {
  User,
};
*/

// Sorthand
module.exports = mongoose.model("User", userSchema);

// Establish DB connection
