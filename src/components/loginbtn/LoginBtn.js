import React, { useContext } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState, useEffect } from "react";
import { userProfileContext } from "../../contexts/contexts";

const LoginBtn = () => {
  const [user, setUser] = useState(null);

  const { userProfile, setUserProfile } = useContext(userProfileContext);

  const login = useGoogleLogin({
    onSuccess: (response) => {
      console.log(response);
      setUser(response);
    },
    onError: (error) => console.log("Login Failed: ", error),
  });

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      );
      console.log(data);
      setUserProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  return (
    <button className="btn btn-login" onClick={login}>
      Login
    </button>
  );
};

export default LoginBtn;
