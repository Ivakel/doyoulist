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
    tasksDB: {
      type: String,
    },
    firebaseId: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
