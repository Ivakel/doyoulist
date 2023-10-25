import React, { useContext } from "react";
import "./styles/Account.css";
import { Updates } from "./components/Updates";
import { User } from "../Helper/Context";
import { auth } from "../authentication/firebase-auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Account = () => {
  const { user } = useContext(User);

  const Submit = () => {};
  const schema = yup.object().shape({
    email: yup.string().email().required("Email required"),
    username: yup.string().min(5).max(12),
    password: yup.string().required("Password required").min(8).max(12),
    confirmPW: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
          <Updates
            register={register}
            handleSubmit={handleSubmit}
            Submit={Submit}
            errors={errors}
          />
        </div>
      </div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </div>
  );
};
