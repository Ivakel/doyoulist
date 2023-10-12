import React from "react";
import "../styles/ListItem.css";

export const ListItem = (props) => {
  return (
    <div className="ListItem">
      <li className="list-item">
        <p className="li-txt">{props.task}</p>
      </li>
    </div>
  );
};
