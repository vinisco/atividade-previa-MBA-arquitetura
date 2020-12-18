import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SigIn from "../pages/SigIn/SigIn";
import SignUp from "../pages/SignUp/SignUp";
import Users from "../pages/Users";

export default function routes() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sigin" element={<SigIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}
