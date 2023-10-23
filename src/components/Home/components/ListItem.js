import React, { useState } from "react";
import "../styles/ListItem.css";
import api from "../../../api/apis";

export const ListItem = ({
  taskName,
  aiMessage,
  setTaskDescription,
  setPrevClicked,
  taskId,
  setTasks,
  firebaseId,
  task,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    await api.post("/deleteTask", { firebaseId, task }).then((res) => {
      console.log(res.data.taskList);
      setTasks(res.data.taskList);
      setTaskDescription([]);
      setPrevClicked((prevState) => {
        return false;
      });
    });
  };

  return (
    <div
      className="ListItem"
      style={{ backgroundColor: clicked ? "#8590bb" : "#8590bb00" }}
    >
      <li
        className="list-item"
        onClick={() => {
          setTaskDescription(aiMessage);
          setClicked(true);
          setPrevClicked((prevState) => {
            if (prevState) {
              prevState(false);
            }
            return setClicked;
          });
        }}
      >
        <p className="li-txt">{taskName}</p>
      </li>
      {clicked ? (
        <button className="delete-task" onClick={handleClick}>
          delete
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
