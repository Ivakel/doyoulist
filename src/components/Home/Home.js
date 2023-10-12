// import { useState } from "react";

import { MainHome } from "./components/MainHome";
import { NavBar } from "./components/NavBar";

export const Home = () => {
  // const [taskList, setTaskList] = useState([]);
  // const [task, setTask] = useState("");

  // const addTask = () => {
  //   const newTask = {
  //     text: task,
  //     id: taskList.length === 0 ? 0 : taskList.length + 1,
  //     isCompleted: false,
  //   };
  //   setTaskList([...taskList, newTask]);
  // };
  return (
    <div className="Home">
      <NavBar />
      <MainHome />
    </div>
  );
};
