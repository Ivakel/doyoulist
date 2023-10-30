import { useState } from "react";
import { ReactComponent as BackArrow } from "../assets/svg/cancel-close-10373.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../styles/UpdateUsername.css";

import api from "../../../api/apis";

export default function UpdateUsername({
  user,

  setUsername,
  setShowUserNameUpdate,
}) {
  const [updated, setUpdated] = useState(false);
  const schema = yup.object().shape({
    username: yup.string().min(4),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCancel = () => {
    setShowUserNameUpdate(false);
  };

  const Submit = async (data) => {
    try {
      await api
        .post("/update/username", {
          firebaseId: user.uid,
          newUsername: data.username,
        })
        .then((res) => {
          setUsername(data.username);
          setUpdated(true);
          setTimeout(() => setUpdated(false), 3000);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="UpdateUsername">
      <div>
        <button className="username-update-back-btn" onClick={handleCancel}>
          <BackArrow className="back-arrow" />
        </button>
      </div>
      {updated && (
        <div className="username-update-success">Username updated.</div>
      )}
      <form className="update-form" onSubmit={handleSubmit(Submit)}>
        <input
          placeholder="New username"
          type="text"
          className="input-area"
          {...register("username")}
        />
        <p
          style={{
            display: errors.email ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.username?.message}
        </p>

        <button type="submit" className="update-submit">
          <p>Update</p>
        </button>
      </form>
    </div>
  );
}
