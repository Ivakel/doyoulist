import "../styles/TaskInput.css";

export const TaskInput = ({ setTaskName, setTaskDescription }) => {
  const handleName = (event) => {
    setTaskName(event.target.value);
  };
  const handleDescription = (event) => {
    setTaskDescription(event.target.value);
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
