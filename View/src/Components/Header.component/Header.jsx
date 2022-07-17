import React, { useEffect } from "react";
import "./header.style.css";
import Logo from "../../images/CVCrafts.svg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {
    localStorage.removeItem("isLogin");
    localStorage.setItem("isLogin", isAuthenticated);
    let isSign = localStorage.getItem("isLogin");
    const CallHomeAPI = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: `CVCrafts`,
          scope: "openid profile email",
        });
        const response = await axios.get(`http://localhost:5000/`, {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            withCredentials: true,
          },
        });
        // console.table(response?.data);
      } catch (error) {
        console.log(error.message);
      }

      // axios
      //   .get(`http://localhost:5000/`).then(response => {
      //     console.log(response.data)
      //   })
      //   .catch((error) => console.log(error.message));
    };
    // CallHomeAPI();
    if (isSign) {
      CallHomeAPI();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  const isLoginLogoutNowFuncation = () => {
    if (isAuthenticated) {
      logout();
    } else {
      loginWithRedirect({
        redirectUri: window.location.origin + "/resume",
      });
    }
  };
  return (
    <div className="relative z-10">
      <header
        className="flex justify-between landingPageContainer pt-5 items-center z-10 md:pt-8
        lg:pt-10"
      >
        <Link to={`/`} className="block ">
          <img src={Logo} alt="Logo" srcSet={Logo} className="" />
        </Link>
        <nav className="flex space-x-6 items-center">
          <Link
            className="cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-10 text-[15px] min-w-[120px] text-primaryBlack border-4 border-solid border-buttonGray hidden md:flex"
            to={"/resume"}
          >
            Try for free
            <span className="flex items-center justify-center ml-2 -mr-1 md:ml-3 md:-mr-[6px]">
              <div className="w-[18px] h-[18px] text-white bg-gradient-to-r from-brandPink to-brandRed rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 5 8"
                  className="w-[6px]"
                >
                  <path
                    fill="#fff"
                    stroke="#fff"
                    d="M.93 6.746a.553.553 0 010-.776l1.44-1.462a1 1 0 000-1.403L.93 1.643a.553.553 0 010-.776v0c.217-.22.571-.22.788 0l2.204 2.238a1 1 0 010 1.403L1.718 6.746a.553.553 0 01-.788 0v0z"
                  ></path>
                </svg>
              </div>
            </span>
          </Link>
          <button
            className="flex border-none  cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-10 text-[15px] min-w-[120px] text-white bd-color"
            // to={"/register"}
            onClick={() => {
              isLoginLogoutNowFuncation();
            }}
          >
            {isAuthenticated ? "Logout Now" : "Register Now"}
            <span className="flex items-center justify-center ml-2 -mr-1 md:ml-3 md:-mr-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 19 18"
                className="w-[18px]"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="M12.36 9.016H3.33M10.164 6.83l2.196 2.186-2.196 2.187"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="M6.879 5.542v-.7a2.763 2.763 0 012.764-2.763h3.663a2.756 2.756 0 012.756 2.756v8.355a2.764 2.764 0 01-2.764 2.764H9.634a2.756 2.756 0 01-2.755-2.756v-.707"
                ></path>
              </svg>
            </span>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
