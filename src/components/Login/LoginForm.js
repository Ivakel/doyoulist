import { Link } from "react-router-dom";
import "./styles/LoginForm.css";

export const LoginForm = (props) => {
  return (
    <div className="LoginForm">
      <p className="text">Login</p>
      <form>
        <label>Email</label>
        <input onChange={(event) => props.setEmail(event.target.value)} />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={(event) => props.setPassword(event.target.value)}
        />
        <button className="submit-btn" onClick={props.handleSubmit}>
          login
        </button>
      </form>
      <p className="login text" style={{ fontSize: "1rem" }}>
        Don't have an account?{" "}
        {
          <Link className="Signup" to="/auth/signup">
            Signup
          </Link>
        }
      </p>
    </div>
  );
};
