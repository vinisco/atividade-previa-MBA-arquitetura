import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserApis from "../api/UsersApi";
import UserCard from "../components/UserCard";

import { useLogged } from "../context/Logged";

export default function Users() {
  const { isLogged } = useLogged();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await UserApis.getUsers();
        setUsersData(res);
      } catch (err) {
        alert(err.message);
      }
    }
    fetch();
  }, [isLogged]);

  if (!isLogged)
    return (
      <div className="mt-5">
        <p className="text-center">
          <strong>Você não está logado!</strong>
        </p>
        <p className="text-primary text-center">
          <Link to="../sigin">Clique aqui pra fazer o login!</Link>
        </p>
        <p className="text-primary text-center">
          <Link to="../signup">
            Ainda não é cadastrado? Clique aqui pra criar seu cadastro!
          </Link>
        </p>
      </div>
    );
  else {
    return (
      <>
        <h1 className="text-center mt-5 mb-5">Usuários cadastrados:</h1>
        <div className="row">
          {usersData.map(({ name, email, id }) => {
            return (
              <div
                style={{ maxWidth: "15rem" }}
                key={id}
                className="col-sm mx-auto text-center"
              >
                <UserCard name={name} email={email} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
