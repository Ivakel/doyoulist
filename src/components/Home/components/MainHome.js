import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { Section } from "./Section";
import "../styles/MainHome.css";
import { AddTask } from "./AddTask";
import { Menu } from "./Menu";

export const MainHome = ({ user, showAddTask, toggle }) => {
  const [taskDecription, setTaskDescription] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="MainHome">
      <SideBar
        tasks={tasks}
        setTasks={setTasks}
        user={user}
        setTaskDescription={setTaskDescription}
      />
      {showAddTask ? (
        <AddTask
          setTasks={setTasks}
          user={user}
          setAdded={setAdded}
          setLoading={setLoading}
          loading={loading}
        />
      ) : (
        <p style={{ display: "none" }}></p>
      )}

      {toggle ? (
        <Menu style={{ display: toggle ? "inline" : "none" }} />
      ) : (
        <p style={{ display: "none" }}></p>
      )}
      <div className="seperator"></div>

      <div
        className="added-poppup"
        style={{ display: added ? "flex" : "none" }}
      >
        <p>Task added</p>
      </div>

      <Section taskDecription={taskDecription} />
    </div>
  );
};
