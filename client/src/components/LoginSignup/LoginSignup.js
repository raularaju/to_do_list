import React, { useState } from "react";
import "./LoginSignup.css";
import email_icon from "../../assets/email.png";
import passord_icon from "../../assets/password.png";
import user_icon from "../../assets/person.png";
const LoginSignup = () => {
  const [action, setAction] = useState("SignUp");

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Nome" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={passord_icon} alt="" />
          <input type="password" placeholder="Senha" />
        </div>
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("SignUp");
          }}
        >
          Registrar
        </div>
        <div
          className={action === "SignUp" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
