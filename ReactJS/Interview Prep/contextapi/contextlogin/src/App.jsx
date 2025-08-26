import { useContext } from "react";
import Login from "./componets/Login";
import User from "./componets/User";
import { AuthContext } from "./AuthContext";

function App() {
  const {isAuthenticated} = useContext(AuthContext)
  return (
    <div>
      {isAuthenticated() ? <User />:<Login />}
      
      
    </div>
  );
}

export default App;
