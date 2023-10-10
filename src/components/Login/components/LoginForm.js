import { Link } from "react-router-dom";
import "../styles/LoginForm.css";

export const LoginForm = (props) => {
  return (
    <div className="LoginForm">
      <p className="text">Login</p>
      <form onSubmit={props.handleSubmit(props.Submit)}>
        <label>Email</label>

        <input {...props.register("email")} />
        <p
          style={{
            display: props.errors.email ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {props.errors.email?.message}
        </p>

        <label>Password</label>
        <input type="password" required {...props.register("password")} />
        <p
          style={{
            display: props.errors.password ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {props.errors.password?.message}
        </p>
        <input type="submit" className="submit-btn" value="Login" />
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