import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSiginForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/fa6f97d9-245e-43d7-bb56-af27cbf6d656/US-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix background image"
        />
      </div>
      <form className="w-4/12 absolute px-12 py-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85">
        <h1 className="bold text-3xl py-4">{isSignInForm ? "Sign in" : "Sign up"}</h1>
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />}
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign in" : "Sign up"}</button>
        <p className="py-4 cursor-pointer hover:underline" onClick={toggleSiginForm}>
          {isSignInForm ? " New to netflix ? Sign up Now" : "Already registered, Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
