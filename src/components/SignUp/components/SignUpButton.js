import { Link } from "react-router-dom";
import "../styles/SignUpButton.css";

export const SignUpButton = () => {
  return (
    <div className="SignUpButton">
      <Link to="/auth/signup" id="links">
        Sign Up
      </Link>
    </div>
  );
};
