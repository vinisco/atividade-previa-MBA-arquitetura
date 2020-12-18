import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import UserApis from "../../api/UsersApi";
import { useLogged } from "../../context/Logged";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("-");
  const [emailConfirm, setEmailConfirm] = useState("-");
  const { setIsLogged } = useLogged();
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const res = await UserApis.getUserByEmail(email);
      res.length !== 0
        ? alert("Usuário já cadastrado nesse email")
        : await UserApis.postUser(name, email, password)
            .then(setIsLogged(true))
            .then(navigate("../users", { replace: true }));
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Novo Usuário</h3>
          <div className="card-text">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                onChange={(event) => setName(event.target.value)}
                id="name"
                type="text"
                className="form-control form-control-sm"
              />
            </div>
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
              <label htmlFor="confirm-email">Confirmar Email</label>
              <input
                onChange={(event) => setEmailConfirm(event.target.value)}
                id="confirm-email"
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
            <div className="form-group">
              <label htmlFor="confirm-password">Confirmar Password</label>
              <input
                onChange={(event) => setPasswordConfirm(event.target.value)}
                id="confirm-password"
                type="password"
                className="form-control form-control-sm"
              />
            </div>

            {name !== "" &&
            email !== "" &&
            password !== "" &&
            password === passwordConfirm &&
            email === emailConfirm ? (
              <button
                onClick={handleSubmit}
                className="btn btn-primary btn-block"
              >
                CRIAR
              </button>
            ) : (
              <>
                <button disabled className="btn btn-primary btn-block">
                  CRIAR
                </button>
                <p className="p-3 mt-2 mb-2 text-danger">
                  *Nenhum campo pode ser vazio, e email e password devem
                  conferir
                </p>
              </>
            )}

            <div className="sign-up">
              Já possue uma conta?{" "}
              <Link to="/sigin">
                <p className="Link">Fazer login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
