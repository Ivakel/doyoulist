import React, { useEffect, useState } from "react";
import "../styles/SideBar.css";
import { ListItem } from "./ListItem";
import Axios from "axios";

const api = Axios.create({ baseURL: "http://localhost:5000" });

export const SideBar = ({ user, setTaskDescription, tasks, setTasks }) => {
  const [prevClicked, setPrevClicked] = useState(null);

  useEffect(() => {
    async function fetchTaskList() {
      try {
        await api
          .post("/taskList", { firebaseId: user.uid, name: "car" })
          .then((res) => {
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
      <ul className="task-list">
        {tasks.map((task, index) => {
          return (
            <ListItem
              task={task.taskName}
              aiMessage={task.aiMessage}
              setTaskDescription={setTaskDescription}
              setPrevClicked={setPrevClicked}
              prevClicked={prevClicked}
            />
          );
        })}
      </ul>
    </div>
  );
};
