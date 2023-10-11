import React from "react";

import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="Footer">
      <p className="subscribeTxt">Subscribe to Newsletter</p>
      <form>
        <label>
          Enter your email address to register to our newsletter subscription!{" "}
        </label>
        <input type="email" />
        <input type="submit" value={"send"} className="subtn" />
      </form>
    </div>
  );
};
