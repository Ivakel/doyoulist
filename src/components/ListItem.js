export const ListItem = (props) => {
  return (
    <div>
      <p
        className="ListItem"
        style={{ color: props.task.completed ? "green" : "black" }}
      >
        {props.task.text}
      </p>
      <button
        onClick={() => {
          props.task.isCompleted = true;
        }}
      >
        Completed
      </button>
    </div>
  );
};
