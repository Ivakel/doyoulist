import React from "react";
import "../styles/SideBar.css";
import { ListItem } from "./ListItem";

export const SideBar = () => {
  const tasks = [
    "Go Home",
    "Go Home",
    "Go Home",
    "Go Home",
    "Go Home",
    "Go Home",
    "Go Home",
  ];
  return (
    <div className="SideBar">
      <ul className="list">
        {tasks.map((task, index) => {
          return <ListItem task={task} />;
        })}
      </ul>
    </div>
  );
};
