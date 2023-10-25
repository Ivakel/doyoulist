import React, { useContext } from "react";
import "./styles/Account.css";
import { Updates } from "./components/Updates";
import { User } from "../Helper/Context";
import { auth } from "../authentication/firebase-auth";

export const Account = () => {
  const { user } = useContext(User);
  return (
    <div className="Account">
      <div className="account-container ">
        <div className="pic-wrapper">
          <img
            alt="profile"
            className="profile-pic"
            src={require("./assets/img/profile-pic.jpg")}
          />
        </div>
        <div className="updates">
          <Updates />
        </div>
      </div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </div>
  );
};
