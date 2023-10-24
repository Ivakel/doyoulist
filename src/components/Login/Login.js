import { useContext, useEffect, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import Axios from "axios";
import "./styles/Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../authentication/firebase-auth";
import { User } from "../Helper/Context";
import { Navigate } from "react-router-dom";

const api = Axios.create({ baseURL: "http://localhost:5000" });

export const Login = () => {
  const { user, setUser, setAuth } = useContext(User);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

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
    const quotes = async () => {
      return await Axios.get("http://localhost:5000/quote").then((data) => {
        setQuote(data.data[0].q);
        setAuthor(data.data[0].a);
      });
    };
    quotes();
  }, []);

  if (user) {
    return <Navigate to="/home" />;
  }

  const Submit = async (data) => {
    let authUser = null;
    try {
      authUser = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await api
        .post("/auth/login", { firebaseId: authUser.user.uid })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
    await setUser(authUser.user);
    await setAuth(authUser);
    if (user) {
      return <Navigate to="/home" />;
    }
  };

  return (
    <div className="Login">
      <div className="wrapper">
        <LoginForm
          register={register}
          handleSubmit={handleSubmit}
          Submit={Submit}
          errors={errors}
        />
        <div className="calendar">
          <div className="quote">
            <blockquote>
              &ldquo;{quote !== "" ? quote : ""}.&rdquo; &mdash;{" "}
              <footer>{author !== "" ? author : ""}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
