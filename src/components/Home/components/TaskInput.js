import { useState } from "react";
import "../styles/TaskInput.css";

export const TaskInput = (props) => {
  const handleName = (event) => {
    props.setTaskName(event.target.value);
  };
  const handleDescription = (event) => {
    props.setTaskDescription(event.target.value);
  };
  return (
    <div className="TaskInput">
      <input
        placeholder="Task name"
        className="task-name"
        onChange={handleName}
        id="textarea"
        type="text"
      />

      <textarea
        placeholder="Task description"
        className="task-description"
        onChange={handleDescription}
        id="textarea"
        type="text"
      ></textarea>
    </div>
  );
};
