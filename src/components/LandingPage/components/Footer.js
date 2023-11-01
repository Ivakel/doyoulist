import React, { useState } from "react";
import api from "../../../api/apis";

import "../styles/Footer.css";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    try {
      await api.post("/newsletter", { email });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Footer">
      <p className="subscribeTxt">Subscribe to Newsletter</p>
      <form>
        <label className="footerLbl">
          Enter your email address to register to our newsletter subscription!
        </label>
        <input
          type="email"
          className="news-email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="submit"
          value={"send"}
          className="subtn"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
