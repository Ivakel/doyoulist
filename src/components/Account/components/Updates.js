import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateEmail, updatePassword } from "firebase/auth";
import { auth } from "../../authentication/firebase-auth";
import { User } from "../../Helper/Context";

import { UpdateForm } from "./UpdateForm";
import "../styles/Update.css";
import api from "../../../api/apis";
import { useNavigate } from "react-router-dom";

export const Updates = () => {
  const { user } = useContext(User);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email(),
    username: yup.string().min(5).max(12),
    password: yup.string().min(0),
    confirmPW: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Submit = async (data) => {
    const promises = [];
    if (data.email) {
      promises.push(updateEmail(user, data.email));
    }
    if (data.password) {
      promises.push(updatePassword(user, data.password));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Update">
      <div className="update-wrapper">
        <UpdateForm
          register={register}
          handleSubmit={handleSubmit}
          Submit={Submit}
          errors={errors}
          user={user}
        />
      </div>
    </div>
  );
};
