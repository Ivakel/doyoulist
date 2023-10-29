import React, { useEffect, useState } from "react";
import api from "../../../api/apis";
import "../styles/DisplayInfo.css";

export default function DisplayInfo({
  user,
  setShowEmailUpdate,
  setShowUserNameUpdate,
  setUsername,
  username,
}) {
  useEffect(() => {
    const getUsername = async () => {
      if (user?.uid) {
        await api.post("/username", { firebaseId: user.uid }).then((res) => {
          setUsername(res.data.username);
        });
      }
    };
    getUsername();
  }, []);
  const handleChangeEmail = () => {
    setShowEmailUpdate(true);
  };
  const handleChangeUsername = () => {
    setShowUserNameUpdate(true);
  };
  return (
    <div className="DisplayInfo">
      <div className="email-diplay">
        <p className="display-email-title ">Email</p>
        <p className="display-user-email display-info">{user?.email}</p>
        <button className="diplay-btn" onClick={handleChangeEmail}>
          Change email
        </button>
      </div>
      <div className="username-diplay">
        <p className="display-username-title">Username</p>
        <p className="display-user display-info">{username}</p>
        <button className="diplay-btn" onClick={handleChangeUsername}>
          Change username
        </button>
      </div>
    </div>
  );
}
