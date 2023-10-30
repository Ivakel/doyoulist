import { useState } from "react";
import { ReactComponent as BackArrow } from "../assets/svg/cancel-close-10373.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  verifyBeforeUpdateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

import "../styles/UpdateEmailPopUp.css";
import { useNavigate } from "react-router-dom";

export default function UpdateEmailPopUp({
  user,
  setShowEmailUpdate,
  setUser,
}) {
  const [checkMail, setCheckMail] = useState(false);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCancel = () => {
    setShowEmailUpdate(false);
  };

  const Submit = async (data) => {
    try {
      const credential = EmailAuthProvider.credential(
        user.email,
        data.password
      );
      const result = await reauthenticateWithCredential(user, credential).then(
        async (currUser) => {
          await verifyBeforeUpdateEmail(currUser.user, data.email);
          setCheckMail(true);
          setTimeout(() => setCheckMail(false), 3000);
          setUser(null);
          navigate("/auth/login");
        }
      );
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <div className="UpdateEmailPopUp">
      <div>
        <button className="email-update-back-btn" onClick={handleCancel}>
          <BackArrow className="back-arrow" />
        </button>
      </div>
      {checkMail && (
        <div className="email-update-success">
          Check your email to verify it.
        </div>
      )}
      <form className="update-form" onSubmit={handleSubmit(Submit)}>
        <input
          placeholder="New email"
          type="text"
          className="input-area"
          {...register("email")}
        />
        <p
          style={{
            display: errors.email ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.email?.message}
        </p>
        <input
          placeholder="password"
          type="password"
          className="input-area"
          {...register("password")}
        />
        <p
          style={{
            display: errors.password ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.password?.message}
        </p>

        <button type="submit" className="update-submit">
          <p>Update</p>
        </button>
      </form>
    </div>
  );
}
