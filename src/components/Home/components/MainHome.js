import React from "react";
import { SideBar } from "./SideBar";
import { Section } from "./Section";
import "../styles/MainHome.css";

export const MainHome = () => {
  return (
    <div className="MainHome">
      <SideBar />

      <Section />
    </div>
  );
};
