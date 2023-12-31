import { Route, Routes } from "react-router-dom";
import { User } from "./Helper/Context";
import "../style/App.css";

import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";
import { LandingPage } from "./LandingPage/LandingPage";
import { Home } from "./Home/Home";
import { useState } from "react";
import { Account } from "./Account/Account";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <User.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/auth/password" element={<ForgotPassword />} />
        </Routes>
      </User.Provider>
    </div>
  );
}

export default App;
