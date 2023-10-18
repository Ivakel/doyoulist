import React, { useEffect, useState } from "react";
import "../styles/SideBar.css";
import { ListItem } from "./ListItem";
import Axios from "axios";

const api = Axios.create({ baseURL: "http://localhost:5000" });

export const SideBar = ({ user }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTaskList() {
      try {
        await api
          .post("/taskList", { firebaseId: user.uid, name: "car" })
          .then((res) => {
            console.log(res);
            setTasks(res.data.taskList);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fetchTaskList();
  }, [user.uid]);
  return (
    <div className="SideBar">
      <ul className="list">
        {tasks.map((task, index) => {
          return <ListItem task={task.taskName} />;
        })}
      </ul>
    </div>
  );
};
