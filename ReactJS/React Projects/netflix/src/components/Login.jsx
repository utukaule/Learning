import Header from "./Header";
import bgImgae from "../images/bg_image.jpg";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setInSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  // checking email and password using regex
  const toggleSignInFrom = () => {
    setInSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const msg = checkValidData(
      email.current.value,
      password.current.value
      // name.current.value
    );
    setErrorMessage(msg);
    if (msg) return;

    // sign in and sign up logic
    // not sign in logic
    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      // signInWithEmailAndPassword goes to firebase and checks the user and compared the password
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user logged in ", user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgImgae} alt="background page" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black p-12 my-24 mx-auto right-0 left-0 text-white bg-opacity-70 rounded"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sing Up"}
        </h1>
        {/* name */}
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4  rounded w-full bg-gray-700"
          />
        )}
        {/* email */}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4  rounded w-full bg-gray-600"
        />

        {/* password */}
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-4 my-4  rounded w-full bg-gray-600"
        />

        {/* error message */}
        <p className="text-red-500 font-bold">{errorMessage}</p>

        {/* sign up and sign in */}
        <button
          className="p-4 my-6 mx-auto bg-red-700 w-full rounded"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sing Up"}
        </button>
        <p onClick={toggleSignInFrom} className="cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
