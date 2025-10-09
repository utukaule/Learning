import Header from "./Header";
import bgImgae from "../images/bg_image.jpg";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setInSignInForm] = useState(true);
  const toggleSignInFrom = () => {
    setInSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgImgae} alt="background page" />
      </div>
      <form className="w-3/12 absolute bg-black p-12 my-24 mx-auto right-0 left-0 text-white bg-opacity-70 rounded">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ?"Sign In" : "Sing Up"}</h1>
        {/* email */}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-white rounded w-full bg-gray-700"
        />
        {/* name */}
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 bg-white rounded w-full bg-gray-700"
        />}
        {/* password */}
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 bg-white rounded w-full bg-gray-700"
        />
        <button className="p-4 my-6 mx-auto bg-red-700 w-full rounded">
          {isSignInForm ?"Sign In" : "Sing Up"} 
        </button>
        <p onClick={toggleSignInFrom} className="cursor-pointer">{isSignInForm ?"New to Netflix? Sign Up Now" : "Already have account? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
