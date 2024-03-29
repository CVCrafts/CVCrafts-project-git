import React, { useRef, useState, useEffect } from "react";
import "./Login.style.css";
import Logo from "../../../images/CVCrafts.svg";
import { Link } from "react-router-dom";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState();

  const signin = async (event) => {
    event.preventDefault();

  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-32 w-auto" src={Logo} alt="CVCrafts" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link
                to={"/register"}
                className="font-medium text-red-500 hover:text-red-400 ml-1"
              >
                Register Now
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="isSignIn" value={`${isLogin}`} />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  autocomplete="email"
                  name="email"
                  required
                  className="appearance-none mb-1 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-transparent focus:ring-transparent focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-transparent focus:ring-transparent focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                onClick={signin}
                type="submit"
                class=" font-serif group relative w-full flex justify-center py-2 px-4 border border-red-300 text-sm font-medium rounded-md text-black bg-red-400 hover:bg-red-300 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <!-- Heroicon name: solid/lock-closed --> */}
                  <svg
                    class="h-5 w-5 text-red-500 group-hover:text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="True"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>

            <div className="flex items-center justify-end">
              {/* <div className="flex items-center" hidden="false">
						<input hidden="true" id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-red-500 focus:text-red-500 focus:ring-0 focus:ring-offset-0  focus:border-current focus:ring-transparent ring-red-500 focus:ring-red-500  border-red-400 rounded"/>
						<label hidden="true" for="remember_me" className="ml-2 block text-sm text-red-500 hover:text-red-400">
							Remember me
						</label>
					</div> */}

              <div className="text-sm">
                <a
                  href="/forget"
                  className="font-medium text-red-500 hover:text-red-400"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
