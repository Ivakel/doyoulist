import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import Axios from "axios";
import "../style/Login.css";

const api = Axios.create({ baseURL: "http://localhost:5000" });

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const defaltQuote = {
    q: "Constantly seek criticism. A well thought out critique of whatever you're doing is as valuable as gold.",
    a: "Elon Musk",
  };

  useEffect(() => {
    const quotes = async () => {
      return await api.get("/quote").then((data) => {
        setQuote(data.data[0].q);
        setAuthor(data.data[0].a);
      });
    };
    quotes();
  }, []);

  const handleSubmit = () => {
    api
      .post("/auth/login", { email, password })
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
              &ldquo;{quote !== "" ? quote : defaltQuote.q}.&rdquo; &mdash;{" "}
              <footer>{author !== "" ? author : defaltQuote.a}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
