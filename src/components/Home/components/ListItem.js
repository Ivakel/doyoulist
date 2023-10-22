import React, { useState } from "react";
import "../styles/ListItem.css";

export const ListItem = ({
  task,
  aiMessage,
  setTaskDescription,
  setPrevClicked,
  prevClicked,
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="ListItem">
      <li
        className="list-item"
        onClick={() => {
          setTaskDescription(aiMessage);
          setClicked(true);
          if (prevClicked) {
            console.log(prevClicked);
            prevClicked(false);
          }
          console.log(clicked);
          setPrevClicked(setClicked);
        }}
        style={{ backgroundColor: clicked ? "#8590bb" : "#8590bb00" }}
      >
        <p className="li-txt">{task}</p>
      </li>
    </div>
  );
};
