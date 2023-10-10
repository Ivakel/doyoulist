import { useEffect, useState } from "react";
import { SignUpForm } from "./components/SignUpForm";
import Axios from "axios";
import "./styles/SignUp.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const api = Axios.create({ baseURL: "http://localhost:5000" });

export const SignUp = () => {
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
    const quotes = async () => {
      return await api.get("/quote").then((data) => {
        setQuote(data.data[0].q);
        setAuthor(data.data[0].a);
      });
    };
    quotes();
  }, []);

  const Submit = async (data) => {
    await api
      .post("/auth/signup", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
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
