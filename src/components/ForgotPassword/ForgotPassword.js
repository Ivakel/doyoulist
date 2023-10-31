import { ReactComponent as BackGroundImg } from "./assets/svg/Forgot-password-bro.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../authentication/firebase-auth";
import { ForgotPassworForm } from "./components/ForgotPassworForm";
import "./styles/ForgotPassword.css";
import { useState } from "react";

export default function ForgotPassword() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const Submit = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="ForgotPassword">
      <BackGroundImg
        className="Forgot-password-bg"
        alt="a person who forgot their password"
      />
      <ForgotPassworForm
        register={register}
        handleSubmit={handleSubmit}
        Submit={Submit}
        errors={errors}
        success={success}
        error={error}
      />
    </div>
  );
}
