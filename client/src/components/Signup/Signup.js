import React, { useState } from "react";
import { createUser } from "../../requests/User";
import { Link, useNavigate } from "react-router-dom";
import SuccessModal from "../../modals/SucessModal";
import "./Signup.css";
import isValidEmail from "../../utils/functions/isValidEmail";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    if (name === "" || email === "" || password === "") {
      setError("Preencha todos os campos");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Campos de senha e confirmação de senha não são iguais");
      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      setError("Email inválido");
      setLoading(false);
      return;
    }
    setLoading(true);

    try {
      createUser({ name: name, email: email, password: password })
        .then(() => {
          setShowSuccessModal(true);
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setError("");
          setLoading(false);
        })
        .catch(() => {
          setError("Usuário já cadastrado");
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
      setError("Usuário já cadastrado");
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h1>Cadastro de usuário</h1>
      <form>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">Confirme a senha:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <div className="submit-container">
          <button type="button" disabled={loading} onClick={handleSubmit}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      </form>
      <h4>
        JÁ POSSUI UMA CONTA? <Link to="/">ENTRE AQUI</Link>
      </h4>
      <SuccessModal
        isOpen={showSuccessModal}
        closeModal={() => setShowSuccessModal(false)}
        redirectToLogin={() => navigate('/')} 
      />
    </div>
  );
}

export default Signup;
