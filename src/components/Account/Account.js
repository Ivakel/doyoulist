import React from "react";
import "./styles/Account.css";

export const Account = () => {
  return (
    <div className="Account">
      <div className="container">
        <div>
          <img
            alt="profile"
            className="profile-pic"
            src={require("./assets/img/profile-pic.jpg")}
          />
        </div>
      </div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </div>
  );
};
