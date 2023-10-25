import React, { useContext } from "react";
import "../styles/Menu.css";
import { User } from "../../Helper/Context";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../authentication/firebase-auth";

export const Menu = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(User);
  const handleLogout = () => {
    signOut(auth);
    setUser(null);

    navigate("/auth/login");
  };
  const handleClick = () => {
    navigate("/account");
  };
  return (
    <div className="Menu">
      <div className="menu-container">
        <button className="account-btn" onClick={handleClick}>
          <img
            className="account-img"
            src={require("../assets/img/account.png")}
            alt="account"
          />
          <p className="account-txt">account</p>
        </button>
        <button className="log-out" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};
