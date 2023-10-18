import React from "react";
import { SideBar } from "./SideBar";
import { Section } from "./Section";
import "../styles/MainHome.css";
import { AddTask } from "./AddTask";
// import BasicDatePicker from "./BasicDatePicker";

export const MainHome = ({ user, showAddTask }) => {
  return (
    <div className="MainHome">
      <SideBar />
      {showAddTask ? (
        <AddTask user={user} />
      ) : (
        <p style={{ display: "none" }}></p>
      )}

      <Section />
    </div>
  );
};
