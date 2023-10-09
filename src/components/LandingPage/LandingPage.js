import { Link } from "react-router-dom";
import "./styles/LandingPage.css";
import { SignUpButton } from "./components/SignUpButton";

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <nav>
        <div className="nav-container">
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
      </nav>
    </div>
  );
};
