import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../requests/User";
import isValidEmail from "../../utils/functions/isValidEmail";
const userIcon = require("../../assets/person.png");
const passwordIcon = require("../../assets/password.png");
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (email === "" || password === "") {
      setError("Preencha todos os campos");
      setLoading(false);
      return;
    }
    if (!isValidEmail(email)) {
      setError("Email inválido");
      setLoading(false);
      return;
    }

    try {
      const res = await login(email, password);
      console.log(res.data.id);
      navigate(`/tasks/${res.data.id}`);
    } catch (error) {
      console.log(error);
      setError("Senha e/ou email incorretos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login">
        <div className="col-left">
          <h2>Login</h2>
          <span>O que será feito hoje? </span>
          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <div className="input">
              <img src={userIcon} alt="" />
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <img src={passwordIcon} alt="" />
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <>
              <button className="btn" type="submit">
                {loading ? "Carregando" : "Login"}
              </button>
            </>

            {error && <div className="error">{error}</div>}
          </form>
          <h4>
            NÃO POSSUI UMA CONTA?{" "}
            <Link className="link" to="/signup">
              CRIE AQUI
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Login;
