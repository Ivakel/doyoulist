import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {} from "firebase/auth";
import { auth } from "../../authentication/firebase-auth";
import { User } from "../../Helper/Context";

import { UpdateForm } from "./UpdateForm";
import "../styles/Update.css";
import api from "../../../api/apis";

export const Updates = () => {
  const { user } = useContext(User);

  const schema = yup.object().shape({
    email: yup.string().email(),
    username: yup.string().min(5).max(12),
    password: yup.string().min(8).max(12),
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

  const Submit = async (data) => {};

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
