import React, { useContext, useState } from "react";
import loginAnimation from "../../../public/login/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import googleLogo from "../../../src/assets/google.png";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userError, setUserError] = useState(null);
  const [userSuccess, setUserSuccess] = useState(null);
  const from = location.state?.from?.pathname || "/";

  const { handleLoginWithEmail, LogInWithGoogle, loginWithGitHub } =
    useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setUserError("");
    setUserSuccess("");
    if (password.length < 6) {
      return setUserError("Write at least six character");
    }

    handleLoginWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUserSuccess("You have login successfully");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setUserError(error.message);
      });
  };

  const loginWithGoogle = () => {
    LogInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUserSuccess("Successfully login with google");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setUserError(error.message);
      });
  };

  const loginWithGithub = () => {
    loginWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUserSuccess("Successfully login with github");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setUserError(error.message);
      });
  };

  return (
    <div className="mx-16 mt-16 md:flex justify-center gap-5 h-80">
      <form onSubmit={handleLogin} className="w-full  md:w-2/4 shadow-2xl p-6">
        <div className="mb-3">
          <div className="text-gray-600 font-bold">
            <label htmlFor="email">Email</label>
          </div>
          <input
            className="w-full border-2 px-2 rounded-md text-lg "
            type="email"
            name="email"
            placeholder="Email"
            required
            id="email"
          />
        </div>
        <div className="mb-3">
          <div className="text-gray-600 font-bold">
            <label htmlFor="password">Password</label>
          </div>
          <input
            className="w-full border-2 px-2 rounded-md text-lg "
            type="password"
            name="password"
            placeholder="Password"
            required
            id="password"
          />
          <p className="text-red-600">
            <small>{userError}</small>
          </p>
          <p className="text-green-600">
            <small>{userSuccess}</small>
          </p>
        </div>
        <p className="mb-3">
          <small className="font-bold ">
            New To Sakura ?{" "}
            <Link className="text-red-700" to="/register">
              Register
            </Link>
          </small>
        </p>

        <button className="bg-blue-400 text-xl hover:bg-blue-600 duration-300 hover:text-white block text-center rounded-sm w-full px-3 py-1 font-semibold ">
          Login
        </button>
        <div className="flex mt-5 gap-2">
          <button
            onClick={loginWithGoogle}
            className="flex items-center gap-1 border-2 rounded-md hover:bg-blue-600 duration-300 hover:text-white px-1 py-1 font-semibold "
          >
            <img className="h-4" src={googleLogo} alt="" />
            Login With Google
          </button>
          <button
            onClick={loginWithGithub}
            className="flex items-center gap-1  hover:bg-blue-600 duration-300 hover:text-white  rounded-md px-1 py-1 font-semibold "
          >
            <FaGithub></FaGithub>
            Login With Github
          </button>
        </div>
      </form>
      <Lottie
        className="shadow-2xl"
        style={{ width: "full" }}
        animationData={loginAnimation}
      />
    </div>
  );
};

export default Login;
