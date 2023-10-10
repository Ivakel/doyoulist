import { Link } from "react-router-dom";
import { SignUpButton } from "./SignUpButton";
import "../styles/Navigation.css";
export const Navigation = () => {
  return (
    <div className="Navigation">
      <p className="title">DOYOULIST</p>
      <div className="components">
        <Link id="links" className="link">
          Services
        </Link>
        <Link id="links" className="link">
          About
        </Link>
        <Link id="links" className="link">
          Contact
        </Link>
        <SignUpButton />
      </div>
    </div>
  );
};
