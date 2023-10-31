import { Link } from "react-router-dom";
import "../styles/ForgotPasswordForm.css";

export const ForgotPassworForm = ({
  handleSubmit,
  Submit,
  register,
  errors,
  success,
  error,
}) => {
  return (
    <div className="ForgotPassworForm">
      <p className="text">Password reset</p>
      {success && (
        <div className="password-update-success">
          Check your email to change password.
        </div>
      )}
      {error && (
        <div className="password-update-error">User email not found.</div>
      )}
      <form onSubmit={handleSubmit(Submit)}>
        <label className="">Email</label>

        <input className="input-fpf" {...register("email")} />
        <p
          style={{
            display: errors.email ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.email?.message}
        </p>

        <input type="submit" className="input-fp" value="Reset password" />
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
