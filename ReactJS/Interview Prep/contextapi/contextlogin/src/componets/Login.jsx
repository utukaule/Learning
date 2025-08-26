import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const { username, setUsername, password, setPassword,login } =
    useContext(AuthContext);
  return (
    <div>
      <h1>User Login</h1>
      <input
        type="text"
        placeholder="enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
