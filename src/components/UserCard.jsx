import React from "react";

export default function UserCard({ name, email }) {
  return (
    <div className="card text-white bg-success mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">email:{email}</p>
      </div>
    </div>
  );
}
