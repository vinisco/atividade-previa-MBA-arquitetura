import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function Header() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Atividade Prévia MBA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li
              className={`nav-item ${
                location.pathname.includes("home") ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname.includes("users") ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname.includes("sigin") ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/sigin">
                SigIn
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname.includes("signup") ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
