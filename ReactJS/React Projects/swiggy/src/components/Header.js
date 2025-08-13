import { useState } from "react";
import { LOGO } from "../utilities/constants";
import "./Header.css";
const Header = () => {
  const [login, setLogin] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              login === "Login" ? setLogin("Logout") : setLogin("Login")
            }
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
