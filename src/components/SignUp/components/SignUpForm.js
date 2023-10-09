import { Link } from "react-router-dom";
import "../styles/SignUpForm.css";

export const SignUpForm = (props) => {
  return (
    <div className="LoginForm">
      <p className="text">Sign up</p>
      <form>
        <label>Email</label>
        <input onChange={(event) => props.setEmail(event.target.value)} />
        <label>Username</label>
        <input onChange={(event) => props.setUsername(event.target.value)} />
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
        Already have an account? {<Link to="/auth/Login">Signup</Link>}
      </p>
    </div>
  );
};
