import { useState } from "react";
import { AddTask } from "./AddTask";

import { NavBar } from "./NavBar";
import { SideBar } from "../SignUp/components/SideBar";

export const Home = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    const newTask = {
      text: task,
      id: taskList.length === 0 ? 0 : taskList.length + 1,
      isCompleted: false,
    };
    setTaskList([...taskList, newTask]);
  };
  return (
    <div className="Home">
      <NavBar />
      <AddTask addTask={addTask} setTask={setTask} />
      <SideBar taskList={taskList} />
    </div>
  );
};
