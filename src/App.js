import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

import Header from "./components/header/Header";
import LoggedProvider from "./context/Logged.jsx";
export default function App() {
  return (
    <LoggedProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes />
        </div>
      </Router>
    </LoggedProvider>
  );
}
