import React from "react";
import "./styles/Account.css";
import { Updates } from "./components/Updates";
import { ReactComponent as BackGroundImg } from "./assets/svg/Update-bro.svg";

export const Account = () => {
  return (
    <div className="Account">
      <div className="account-container ">
        {/* <div className="pic-wrapper">
          <img
            alt="profile"
            className="profile-pic"
            src={require("./assets/img/profile-pic.jpg")}
          />
        </div> */}
        <p className="account-update-errors"></p>
        <Updates />
      </div>
      <BackGroundImg className="account-bg" />
    </div>
  );
};
