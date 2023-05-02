import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import registerAnimation from "../../../public/register/register1.json";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import googleLogo from "../../../src/assets/google.png";

const Register = () => {
  const [userError, setUserError] = useState(null);
  const [userSuccess, setUserSuccess] = useState(null);
  const { handleRegisterWithEmail,LogInWithGoogle } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, photo, email, password, confirm);
    setUserError("");
    setUserSuccess("");
    if (password.length < 6) {
      return setUserError("Write at least six character");
    }
    if (password != confirm) {
      return setUserError("Password did't match");
    }

    handleRegisterWithEmail(email, password)
      .then((result) => {
        const registeredUser = result.user;
        console.log(registeredUser);
        setUserSuccess("You have registered successfully");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setUserError(error.message);
      });
  };


  const loginWithGoogle = () => {
    LogInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUserSuccess('Successfully login with google')
      }).catch(error => {
        console.log(error);
        setUserError(error.message)
    })
  }


  return (
    <div className=" md:flex justify-center gap-5">
      <form
        onSubmit={handleRegister}
        className=" w-full  md:w-2/5 shadow-2xl p-6"
      >
        <div className="mb-2">
          <div className="text-gray-600 font-bold">
            <label htmlFor="Name">Name</label>
          </div>
          <input
            className="w-full border-2 px-2 rounded-md text-lg "
            type="text"
            name="name"
            placeholder="Name"
            required
            id="name"
          />
        </div>
        <div className="mb-2">
          <div className="text-gray-600 font-bold">
            <label htmlFor="text">Photo URL</label>
          </div>
          <input
            className="w-full border-2 px-2 rounded-md text-lg "
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
            id="photo"
          />
        </div>
        <div className="mb-2">
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
        <div className="mb-2">
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
        </div>
        <div className="mb-2">
          <div className="text-gray-600 font-bold">
            {" "}
            <label htmlFor="password">Confirm Password</label>
          </div>
          <input
            className="w-full border-2 px-2 rounded-md text-lg "
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
            id="confirm"
          />
          <p className="text-red-700">
            <small>{userError}</small>
          </p>
          <p className="text-green-600">
            <small>{userSuccess}</small>
          </p>
        </div>

        <div className="mb-2 flex gap-4">
          <div>
            <input className="me-3" type="checkbox" name="accept" />
            <label>Check Me!</label>
          </div>
          <p>
            <small className="font-bold">
              Already have an account ?{" "}
              <Link className="text-red-700" to="/login">
                Login
              </Link>
            </small>
          </p>
        </div>

        <button className="bg-blue-400 text-xl hover:bg-blue-600 duration-300 hover:text-white block text-center rounded-sm w-full px-3 py-1 font-semibold ">
          Register
        </button>
        <div className="flex mt-5 gap-2">
          <button onClick={loginWithGoogle} className="flex items-center gap-1 border-2 rounded-md hover:bg-blue-600 duration-300 hover:text-white px-1 py-1 font-semibold ">
            <img className="h-4" src={googleLogo} alt="" />
            Login With Google
          </button>
          <button className="flex items-center gap-1  hover:bg-blue-600 duration-300 hover:text-white  rounded-md px-1 py-1 font-semibold ">
            <FaGithub></FaGithub>
            Login With Github
          </button>
        </div>
      </form>
      <Lottie
        className="shadow-2xl md:w-2/5"
        animationData={registerAnimation}
      />
      ;
    </div>
  );
};

export default Register;
