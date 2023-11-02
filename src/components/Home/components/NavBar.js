import React from "react";
import { ReactComponent as Hamburger } from "../assets/svg/icons8-menu.svg";
import { ReactComponent as XHamburger } from "../assets/svg/x-symbol-svgrepo-com.svg";

import { ReactComponent as Profile } from "../assets/svg/profile-user.svg";
import { ReactComponent as Bell } from "../assets/svg/bell-2.svg";

import "../styles/NavBar.css";

export const NavBar = ({ setShowAddTask, showAddTask, toggle, setToggle }) => {
  const handleAdd = () => {
    setShowAddTask(!showAddTask);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="NavBar">
      {toggle ? (
        <XHamburger className="xhamburger" onClick={handleToggle} />
      ) : (
        <Hamburger className="hamburger" onClick={handleToggle} />
      )}

      <div className="right">
        <button className="button-22" onClick={handleAdd}>
          + New Task
        </button>
        <div className="Notification">
          <Bell className="bell" />
        </div>
        <Profile className="profile" />
      </div>
    </div>
  );
};
