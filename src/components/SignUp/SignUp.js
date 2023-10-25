import { useContext, useEffect, useState } from "react";
import { SignUpForm } from "./components/SignUpForm";
import Axios from "axios";
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

const api = Axios.create({ baseURL: "http://localhost:5000" });

export const SignUp = () => {
  const { user, setUser } = useContext(User);
  const navigate = useNavigate();
  onAuthStateChanged(auth, (data) => {
    setUser(data);
    if (user) {
      navigate("/home");
    }
  });

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

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
  useEffect(() => {
    //getting the quote api
    const quotes = async () => {
      return await api.get("/quote").then((data) => {
        setQuote(data.data[0].q);
        setAuthor(data.data[0].a);
      });
    };
    quotes();
  }, []);
  const Submit = async (dataSubmit) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        dataSubmit.email,
        dataSubmit.password
      ).then(async (data) => {
        const newData = { ...dataSubmit, firebaseId: data.user.uid };
        console.log(newData);
        await api
          .post("/auth/signup", newData)
          .then((res) => {
            console.log(res.user ? res.user : res);
          })
          .catch((error) => console.log(error));
        setUser((old) => {
          return data.user;
        });
        console.log(data.user);
        navigate("/home");
      });
    } catch (error) {}
  };

  return (
    <div className="SignUp">
      <div className="wrapper">
        <SignUpForm
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
