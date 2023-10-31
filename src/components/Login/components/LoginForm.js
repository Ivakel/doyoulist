import { Link } from "react-router-dom";
import "../styles/LoginForm.css";

export const LoginForm = ({
  handleSubmit,
  Submit,
  register,
  errors,
  setBackendLoginError,
  backendLoginError,
}) => {
  return (
    <div className="LoginForm">
      <p className="text">Login</p>
      {backendLoginError && (
        <p className="error-display">Unable to login, try again later</p>
      )}

      <form onSubmit={handleSubmit(Submit)}>
        <label className="lbl-li">Email</label>

        <input className="input-li" {...register("email")} />
        <p
          style={{
            display: errors.email ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.email?.message}
        </p>

        <label className="lbl-li">Password</label>
        <input
          className="input-li li-pw"
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
        <hr />
        <input type="submit" className="submit-btn input-li" value="Login" />
        <Link to="/auth/password" style={{ color: "black" }}>
          Forgot your password?
        </Link>
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
