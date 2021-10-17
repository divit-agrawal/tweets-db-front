import React from "react";
import axios from "axios";
import { useHistory } from "react-router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Login = (props) => {
  const history = useHistory();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    var apd = { email: email, password: password };
    axios
      .post("https://tweets-db-backend.herokuapp.com/login", apd)
      .then((data) => {
        localStorage.setItem("token", data.data.token);
        console.log(data.data);
        props.setUserData(data.data);
        props.setLoggedIn(true);
        console.log(props.loggedIn);
        history.push("/");
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={classNames(
                "bg-blue-500 text-white hover:bg-blue-200 px-3 py-2 rounded-md text-sm font-medium"
              )}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
