import { useEffect, useState } from "react";
import { SignUpForm } from "./components/SignUpForm";
import Axios from "axios";
import "./styles/SignUp.css";

const api = Axios.create({ baseURL: "http://localhost:5000" });

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const quotes = async () => {
      return await api.get("/quote").then((data) => {
        setQuote(data.data[0].q);
        setAuthor(data.data[0].a);
      });
    };
    quotes();
  }, []);

  const handleSubmit = async () => {
    await api
      .post("/auth/signup", { email, password, username })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="SignUp">
      <div className="wrapper">
        <SignUpForm
          setEmail={setEmail}
          setPassword={setPassword}
          setUsername={setUsername}
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
