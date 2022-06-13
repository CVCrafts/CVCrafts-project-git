import React from "react";
import Profile from "../profile/profile";

const Summery = () => {
  return (
    <div>
      <div className=" relative top-16 mt-4">
        <details className=" relative bg-white w-full shadow rounded group transition-all duration-1000 ease-in-out">
          <summary className="list-none flex flex-wrap items-center cursor-pointer w-full  lg:w-full transition-all duration-1000 ease-in-out">
            <h3 className="flex flex-1 p-4 font-bold uppercase text-red-300">
              Profile
            </h3>
            <div className="flex w-10 items-center justify-center">
              <div className="border-8 border-transparent border-l border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left">
                <i className="bx bxs-right-arrow bx-flip-vertical group-open:text-red-400"></i>
              </div>
            </div>
          </summary>
          <div className="p-4">
            {/* form here */}
            <Profile />
          </div>
        </details>
      </div>
    </div>
  );
};

export default Summery;
