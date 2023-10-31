import { useContext, useEffect, useState } from "react";
import { LoginForm } from "./components/LoginForm";

import "./styles/Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../authentication/firebase-auth";
import { User } from "../Helper/Context";
import { Navigate } from "react-router-dom";
import { ReactComponent as BackGroundImg } from "./assets/svg/Privacy-policy-pana.svg";
import api from "../../api/apis";

export const Login = () => {
  const { user, setUser } = useContext(User);
  const [backendLoginError, setBackendLoginError] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email required"),
    password: yup.string().required("Password required").min(8).max(12),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setUser(data);
    });
  }, [setUser]);

  if (user) {
    return <Navigate to="/home" />;
  }

  const Submit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      await api
        .post("/auth/login", { firebaseId: user.uid })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      setBackendLoginError(true);
    }
  };

  return (
    <div className="Login">
      <BackGroundImg className="sign-up-bg" />
      <div className="login-wrapper">
        <LoginForm
          register={register}
          handleSubmit={handleSubmit}
          Submit={Submit}
          errors={errors}
          backendLoginError={backendLoginError}
          setBackendLoginError={setBackendLoginError}
        />
      </div>
    </div>
  );
};
