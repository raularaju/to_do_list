import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_keevo from "../../assets/banner.png";
import { login } from "../../requests/User";
import isValidEmail from "../../utils/functions/isValidEmail";
import "./Login.css";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if(email === "" || password === "") {
        setError("Preencha todos os campos");
        setLoading(false);
        return;
    }
    if(!isValidEmail(email)) {
        setError("Email inválido");
        setLoading(false);
        return;
    }

    try {
      const res = await login(email, password);
      console.log(res.data.id)
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
            <div>
              <label htmlFor="Email">Email: </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Senha: </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {loading ? (
              <div>Carregando...</div>
            ) : (
              <>
                <button className="btn" type="submit">
                  Login
                </button>
              </>
            )}
            {error && <div className="error">{error}</div>}
          </form>
          <h4>
            NÃO POSSUI UMA CONTA? <Link to="/signup">CRIE AQUI</Link>
          </h4>
        </div>

        <div className="col-right">
          <img src={logo_keevo} alt="" />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
