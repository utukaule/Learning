import { useState } from "react";
import { LOGO } from "../utilities/constants";
import "./Header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
const Header = () => {
  const online = useOnlineStatus();
  const [login, setLogin] = useState("Login");
  const header = {
    paddingLeft: "10px",
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to={"/"}>{online ? "🟢" : "🔴"}</Link>
          <Link style={header} to={"/"}>
            Home
          </Link>
          <Link style={header} to={"/about"}>
            About
          </Link>
          <Link style={header} to={"/contact"}>
            Contact
          </Link>
          <Link style={header} to={"/grocery"}>
            Grocery
          </Link>
          <Link style={header} to={"/Cart"}>
            Cart
          </Link>
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
