import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("login");

  return (
    <nav className="flex justify-between p-5 shadow-lg border border-gray">
      <div>
        <p className="text-2xl">LOGO</p>
      </div>
      <div >
        <ul className="flex">
          <Link to={'/'} className="mx-2">Home</Link>
          <Link to={'about'} className="mx-2">About</Link>
          <Link to={'/contact'} className="mx-2">Contact</Link>
          <Link to={'/cart'} className="mx-2">Cart</Link>
          <li className="cursor-pointer" onClick={() => login === "login"?setLogin("logout"):setLogin("login")}>
            {login}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
