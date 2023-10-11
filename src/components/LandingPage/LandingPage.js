import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Navigation } from "./components/Navigation";
import { Services } from "./components/Services";
import "./styles/LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <nav>
        <div className="nav-container">
          <Navigation />
        </div>
      </nav>

      <Main className="main" />
      <Services />
      <Features />
      <Footer />
    </div>
  );
};
