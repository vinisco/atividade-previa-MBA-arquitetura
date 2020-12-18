import React, { createContext, useState, useContext } from "react";

const LoggedContext = createContext();

export default function LoggedProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoggedContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </LoggedContext.Provider>
  );
}

export function useLogged() {
  const context = useContext(LoggedContext);
  const { isLogged, setIsLogged } = context;
  return { isLogged, setIsLogged };
}
