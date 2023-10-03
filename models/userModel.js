const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    googleLogin: {
      type: Boolean,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    username: {
      type: String,
    },
    googleID: {
      type: String,
    },
    todolist: {
      type: Array,
    },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
