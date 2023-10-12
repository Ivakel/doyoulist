import React from "react";
import { ReactComponent as Hamburger } from "../assets/svg/hamburger-menu.svg";

import { ReactComponent as Profile } from "../assets/svg/profile-user.svg";
import { ReactComponent as Bell } from "../assets/svg/bell-2.svg";

import "../styles/NavBar.css";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <Hamburger className="hamburger" />

      <div className="right">
        <div className="Notification">
          <Bell className="bell" />
        </div>
        <Profile className="profile" />
      </div>
    </div>
  );
};
