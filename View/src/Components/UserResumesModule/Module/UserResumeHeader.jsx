import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../images/CVCrafts.svg";
import { useAuth0 } from "@auth0/auth0-react";

const UserResumeHeader = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
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
    <>
      <div className="bg-homeBackgroundColor px-6 pt-0 pb-2 sm:px-8 md:px-10 md:pb-4 lg:px-12 lg:pb-6 xl:px-14">
        <div className="flex w-full items-center justify-between">
          <Link
            to={`/`}
            className="appearance-none no-underline decoration-current relative hover:opacity-80"
          >
            <img src={LogoImage} alt="" srcset={LogoImage} />
          </Link>
          <div className="flex w-auto items-center space-x-3 sm:space-x-6">
            <button
              type="button"
              class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center outline-none hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-10 text-[15px] min-w-[120px] text-white bg-primaryBlack"
              onClick={() => {
                isLoginLogoutNowFuncation();
              }}
            >
              {!isAuthenticated ? "Login" : "Logout"}
              <span class="flex items-center justify-center ml-2 -mr-1 md:ml-3 md:-mr-[6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-[1.4em]"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15.813 12.022H3.77M12.885 9.106l2.928 2.916-2.928 2.916"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8.504 7.389v-.933a3.684 3.684 0 013.685-3.684h4.884a3.675 3.675 0 013.675 3.675v11.14a3.685 3.685 0 01-3.685 3.685h-4.885a3.675 3.675 0 01-3.674-3.675v-.942"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserResumeHeader;
