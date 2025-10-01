import { useContext, useState } from "react";
import { LOGO } from "../utilities/constants";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const online = useOnlineStatus();
  const [login, setLogin] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser)

  // subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100">
      <div className="">
        <img className="w-20" src={LOGO} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-1">
            <Link to={"/"}>{online ? "🟢" : "🔴"}</Link>
          </li>
          <li className="px-1">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-1">
            {" "}
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-1">
            {" "}
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-1">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-1">
            <Link to={"/cart"}>Cart - ({cartItems.length})</Link>
          </li>

          <button
            className="px-2 py-1 border border-black rounded bg-black text-white"
            onClick={() =>
              login === "Login" ? setLogin("Logout") : setLogin("Login")
            }
          >
            {login}
          </button>
          <li className="px-1 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
