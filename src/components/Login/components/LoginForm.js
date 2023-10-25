import { Link } from "react-router-dom";
import "../styles/LoginForm.css";

export const LoginForm = ({ handleSubmit, Submit, register, errors }) => {
  return (
    <div className="LoginForm">
      <p className="text">Login</p>
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
          className="input-li"
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
        <input type="submit" className="submit-btn input-li" value="Login" />
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
