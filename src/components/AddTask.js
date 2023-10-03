export const AddTask = (props) => {
  return (
    <div className="AddTask">
      <input
        onChange={(event) => {
          props.setTask(event.target.value);
        }}
      />
      <button onClick={props.addTask}>Add</button>
    </div>
  );
};
