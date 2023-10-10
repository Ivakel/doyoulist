import { useEffect, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import Axios from "axios";
import "./styles/Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const api = Axios.create({ baseURL: "http://localhost:5000" });

export const Login = () => {
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

  const Submit = async (data) => {
    await api
      .post("/auth/login", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
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
