import React, { useEffect, useState } from "react";
import "../styles/SideBar.css";
import { ListItem } from "./ListItem";
import api from "../../../api/apis";

export const SideBar = ({ user, setTaskDescription, tasks, setTasks }) => {
  const [prevClicked, setPrevClicked] = useState(false);

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
      {tasks.length === 0 ? (
        <p className="add-task-txt">+ add a task</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => {
            return (
              <ListItem
                firebaseId={user.uid}
                setTasks={setTasks}
                taskName={task.taskName}
                aiMessage={task.aiMessage}
                setTaskDescription={setTaskDescription}
                setPrevClicked={setPrevClicked}
                taskId={task._id}
                task={task}
              />
            );
          })}
        </ul>
      )}
      {/* {tasks.map((task, index) => {
        console.log(task._id);
      })} */}
    </div>
  );
};
