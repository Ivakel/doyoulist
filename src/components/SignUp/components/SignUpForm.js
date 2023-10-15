import { Link } from "react-router-dom";

import "../styles/SignUpForm.css";

export const SignUpForm = (props) => {
  return (
    <div className="LoginForm">
      <p className="text">Sign up</p>
      <form onSubmit={props.handleSubmit(props.Submit)}>
        <label className="lbl-su">Email</label>

        <input className="input-su" {...props.register("email")} />
        <p
          style={{
            display: props.errors.email ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {props.errors.email?.message}
        </p>

        <label className="lbl-su">Username</label>
        <input className="input-su" {...props.register("username")} />
        <p
          style={{
            display: props.errors.username ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {props.errors.username?.message}
        </p>

        <label className="lbl-su">Password</label>
        <input
          className="input-su"
          type="password"
          required
          {...props.register("password")}
        />
        <p
          style={{
            display: props.errors.password ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {props.errors.password?.message}
        </p>

        <label className="lbl-su">Confirm Password</label>
        <input
          className="input-su"
          type="password"
          required
          {...props.register("confirmPW")}
        />
        <p
          style={{
            display: props.errors.confirmPW ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {props.errors.confirmPW?.message}
        </p>
        <input type="submit" className="submit-btn input-su" value="Sign up" />
      </form>
      <p className="login text" style={{ fontSize: "1rem" }}>
        Already have an account? {<Link to="/auth/Login">Login</Link>}
      </p>
    </div>
  );
};
