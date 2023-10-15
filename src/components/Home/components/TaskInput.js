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
        onClick={handleName}
      />
      <input
        placeholder="Task description"
        className="task-description"
        onClick={handleDescription}
      />
    </div>
  );
};
