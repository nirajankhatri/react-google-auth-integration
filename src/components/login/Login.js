import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <GoogleLogin
        onSuccess={(response) => {
          console.log(response);
          navigate("/");
        }}
        onError={(error) => console.log(error)}
      />
    </div>
  );
};

export default Login;
