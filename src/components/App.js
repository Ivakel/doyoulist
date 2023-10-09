import { Route, Routes } from "react-router-dom";
import "../style/App.css";

import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";
import { LandingPage } from "./LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
