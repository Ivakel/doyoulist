import { useContext, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  updateEmail,
  updatePassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../authentication/firebase-auth";
import { User } from "../../Helper/Context";

import { UpdateForm } from "./UpdateForm";
import "../styles/Update.css";

import { useNavigate } from "react-router-dom";
import DisplayInfo from "./DisplayInfo";
import UpdateEmailPopUp from "./UpdateEmailPopUp";
import UpdateUsername from "./UpdateUsername";

export const Updates = () => {
  const { user, setUser } = useContext(User);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showEmailUpdate, setShowEmailUpdate] = useState(false);
  const [showUserNameUpdate, setShowUserNameUpdate] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!user) {
      return navigate("/auth/login");
    }
  }, [user, navigate]);

  return (
    <div className="Update">
      <div className="update-wrapper">
        <DisplayInfo
          user={user}
          style={{ PointerEvent: showEmailUpdate ? "none" : "auto" }}
          setShowEmailUpdate={setShowEmailUpdate}
          setShowUserNameUpdate={setShowUserNameUpdate}
          username={username}
          setUsername={setUsername}
        />
        {showEmailUpdate && (
          <UpdateEmailPopUp
            setShowEmailUpdate={setShowEmailUpdate}
            user={user}
            setUser={setUser}
          />
        )}
        {showUserNameUpdate && (
          <UpdateUsername
            setShowUserNameUpdate={setShowUserNameUpdate}
            user={user}
            setUsername={setUsername}
          />
        )}
      </div>
    </div>
  );
};
