import React from "react";
import { theAccessUrl } from "../../config/spotify";
import "./_login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__content">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <a href={theAccessUrl}>Login to Aga spotify</a>
      </div>
    </div>
  );
};

export default Login;
