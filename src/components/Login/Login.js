import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import Axios from "axios";
import "./styles/Login.css";

// const api = Axios.create({ baseURL: "http://localhost:5000" });

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const quotes = async () => {
      return await Axios.get("http://localhost:5000/quote").then((data) => {
        setQuote(data.data[0].q);
        setAuthor(data.data[0].a);
      });
    };
    quotes();
  }, []);

  const handleSubmit = async () => {
    await Axios.post("http://localhost:5000/auth/login", { email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Login">
      <div className="wrapper">
        <LoginForm
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
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
