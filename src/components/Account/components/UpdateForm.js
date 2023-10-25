import { Link } from "react-router-dom";
import "../styles/UpdateForm.css";
import { User } from "../../Helper/Context";
import { useContext } from "react";
export const UpdateForm = ({ register, handleSubmit, Submit, errors }) => {
  const { user } = useContext(User);
  console.log(user);
  return (
    <div className="UpdateForm">
      <form className="update-form" onSubmit={handleSubmit(Submit)}>
        <input
          placeholder={`${user?.email}`}
          type="text"
          className="input-area"
          {...register("email")}
        />
        <p
          style={{
            display: errors.email ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.email?.message}
        </p>

        {/* <input type="text" className="input-area" {...register("username")} />
        <p
          style={{
            display: errors.username ? "inline" : "none",
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {errors.username?.message}
        </p> */}

        <input
          className="input-area"
          type="password"
          placeholder="New password"
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

        <input
          className="input-area"
          type="password"
          placeholder="Confirm password"
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
        <button type="submit" className="update-submit">
          <p>Update</p>
        </button>
      </form>
    </div>
  );
};
