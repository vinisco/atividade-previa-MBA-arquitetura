import React from "react";
import logo from "../images/igti.svg";

export default function Home() {
  return (
    <div className="row vh-100">
      <div className="col align-self-center">
        <div className="card">
          <img className="card-img" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
