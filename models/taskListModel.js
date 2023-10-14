const mongoose = require("mongoose");

const TaskListSchema = new mongoose.Schema(
  {
    list: {
      type: Array,
    },
  },
  {
    timestamp: true,
  }
);

const TaskList = mongoose.model("TaskList", TaskListSchema);

module.exports = TaskList;
