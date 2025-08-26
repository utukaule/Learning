import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    setUser(username);
  };
  const isAuthenticated = () => {
    if (user != null) return true;
    else return false;
  };
  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        login,
        user,
        setUser,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
