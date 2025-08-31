import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is:",email);
    console.log("password is:",password);
    
    setEmail("")
    setPassword("")
  };
  return (
    <div className="flex items-center h-screen w-screen justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => submitHandler(e)}
          action=""
          className="flex flex-col items-center justify-center"
        >
          {/* email */}
          <input
            required
            type="email"
            className="text-white 
            outline-none bg-transparent 
            border-2 border-emerald-600 
            text-xl rounded-full py-3 px-5 
            placeholder:text-gray-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* password */}
          <input
            required
            type="password"
            className="text-white mt-3
            outline-none bg-transparent 
            border-2 border-emerald-600 
            text-xl rounded-full py-3 px-5 
            placeholder:text-gray-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="text-white mt-7 w-full
            outline-none bg-emerald-600 
             border-none 
            text-xl rounded-full py-3 px-5 
            placeholder:text-white"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
