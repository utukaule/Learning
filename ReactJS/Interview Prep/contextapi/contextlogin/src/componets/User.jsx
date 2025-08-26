import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const User = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <div>
      <h1>hello {user}</h1>
    </div>
  );
};

export default User;
