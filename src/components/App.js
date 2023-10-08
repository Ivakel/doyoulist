import { Route, Routes } from "react-router-dom";
import "../style/App.css";

import { Login } from "./Login";
import { SignUp } from "./SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
