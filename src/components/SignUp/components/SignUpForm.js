import { Link } from "react-router-dom";

import "../styles/SignUpForm.css";

export const SignUpForm = ({
  errors,
  handleSubmit,
  Submit,
  register,

  backendSignUpError,
}) => {
  return (
    <div className="SignUpForm">
      <p className="text">Sign up</p>
      {backendSignUpError && (
        <p
          className="error-display"
          style={{ color: "#ee2e54", fontSize: "1rem" }}
        >
          Unable to signup, try again later
        </p>
      )}
      <form onSubmit={handleSubmit(Submit)}>
        <label className="lbl-su">Email</label>

        <input className="input-su" {...register("email")} />
        <p
          style={{
            display: errors.email ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.email?.message}
        </p>

        <label className="lbl-su">Username</label>
        <input className="input-su" {...register("username")} />
        <p
          style={{
            display: errors.username ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.username?.message}
        </p>

        <label className="lbl-su">Password</label>
        <input
          className="input-su"
          type="password"
          required
          {...register("password")}
        />
        <p
          style={{
            display: errors.password ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.password?.message}
        </p>

        <label className="lbl-su">Confirm Password</label>
        <input
          className="input-su"
          type="password"
          required
          {...register("confirmPW")}
        />
        <p
          style={{
            display: errors.confirmPW ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.confirmPW?.message}
        </p>

        <input type="submit" className="submit-btn input-su" value="Sign up" />
        <p className="login text" style={{ fontSize: "1rem" }}>
          Already have an account? {<Link to="/auth/Login">Login</Link>}
        </p>
      </form>
    </div>
  );
};
