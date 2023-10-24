import React, { useContext } from "react";
import "../styles/Menu.css";
import { User } from "../../Helper/Context";
import { Navigate } from "react-router-dom";

export const Menu = () => {
  const { setAuth, setUser } = useContext(User);
  const handleLogout = () => {
    setUser(null);
    setAuth(null);
    return <Navigate to="/login" />;
  };
  return (
    <div className="Menu">
      <div className="container">
        <button className="account-btn">
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
