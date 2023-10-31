import { useContext, useState } from "react";
import { SignUpForm } from "./components/SignUpForm";
import { ReactComponent as BackGroundImg } from "./assets/svg/Blog post-bro.svg";

import "./styles/SignUp.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../authentication/firebase-auth";
import { User } from "../Helper/Context";
import { useNavigate } from "react-router-dom";
import api from "../../api/apis";

export const SignUp = () => {
  const [backendSignUpError, setBackendSignUpError] = useState(false);
  const { user, setUser } = useContext(User);
  const navigate = useNavigate();
  onAuthStateChanged(auth, (data) => {
    setUser(data);
    if (user) {
      navigate("/home");
    }
  });

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

  const Submit = async (dataSubmit) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        dataSubmit.email,
        dataSubmit.password
      ).then(async (data) => {
        const newData = {
          email: dataSubmit.email,
          username: dataSubmit.username,
          firebaseId: data.user.uid,
        };
        console.log(newData);
        await api
          .post("/auth/signup", newData)
          .then((res) => {
            console.log(res.user ? res.user : res);
          })
          .catch((error) => {
            console.log(error);
            setBackendSignUpError(true);
          });
        setUser((old) => {
          return data.user;
        });
        console.log(data.user);
        navigate("/home");
      });
    } catch (error) {
      setBackendSignUpError(true);
    }
  };

  return (
    <div className="SignUp">
      <BackGroundImg className="sign-up-bg" />
      <div className="wrapper">
        <SignUpForm
          register={register}
          handleSubmit={handleSubmit}
          Submit={Submit}
          errors={errors}
          backendSignUpError={backendSignUpError}
          setBackendSignUpError={setBackendSignUpError}
        />
      </div>
    </div>
  );
};
