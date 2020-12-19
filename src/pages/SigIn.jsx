import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import UserApis from "../api/UsersApi";
import { useLogged } from "../context/Logged";
import "./Pages.css";

export default function SigIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLogged } = useLogged();
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const res = await UserApis.getUser(email, password);
      res.length === 0
        ? alert("Usuário ou senha incorreta")
        : await UserApis.getUser(email, password)
            .then(setIsLogged(true))
            .then(navigate("../users"));
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Entrar</h3>
          <div className="card-text">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                type="email"
                className="form-control form-control-sm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                id="password"
                type="password"
                className="form-control form-control-sm"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="btn btn-primary btn-block"
            >
              ENTRAR
            </button>

            <div className="sign-up">
              Não possue uma conta?{" "}
              <Link to="/signup">
                {" "}
                <p className="Link">Criar Usuário</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
