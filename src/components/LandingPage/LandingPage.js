import { Main } from "./components/Main";
import { Navigation } from "./components/Navigation";
import "./styles/LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <nav>
        <div className="nav-container">
          <Navigation />
        </div>
      </nav>
      <div className="main">
        <Main />
      </div>
    </div>
  );
};
