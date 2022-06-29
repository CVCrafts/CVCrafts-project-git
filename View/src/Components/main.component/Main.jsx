import React from "react";
import { Link } from "react-router-dom";
import HomeSvg from "../../images/homesvg.svg";
export const Main = () => {
  return (
    <React.Fragment>
      <main role="main" className="">
        <div className="landingPageContainer pt-4 md:pt-8 pb-12 lg:pt-28 lg:pb-28">
          <div className="grid grid-cols-1 justify-items-center lg:justify-items-stretch lg:grid-cols-[10fr_8fr] xl:grid-cols-[10fr_9fr] lg:gap-4">
            <div className="w-[360px] sm:w-[400px] lg:w-auto lg:order-2 relative flex">
              <div className="pr-5 pl-10 w-full">
                <img src={HomeSvg} alt={"Home"} />
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-4xl md:text-5xl xl:text-6xl text-center lg:text-left font-extrabold">
                Build a job-winning CVs&nbsp;for&nbsp;free
              </h1>
              <p className="text-center text-base lg:text-left px-6 md:px-o mt-4 lg:mt-5 leading-[1.6] lg:px-0 lg:pr-20 text-gray-500 md:text-lg xl:text-xl">
                Set yourself apart with a modern CVs. Expert&nbsp;tips,
                customizable templates&nbsp;&amp;&nbsp;quick PDF download
                included.
              </p>
              <div className="flex justify-center mt-8 lg:justify-start lg:mt-12">
                <div className="flex flex-col items-center">
                  <Link
                    className="flex border-none cursor-pointer appearance-none touch-manipulation items-center justify-center outline-none hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-16 text-[19px] min-w-[240px] xl:h-18 xl:text-2xl xl:min-w-[240px] text-white bg-gradient-to-r from-brandPink to-brandRed w-[240px] md:w-[320px]"
                    to={"/resume"}
                  >
                    Try for free
                  </Link>
                  <p className="max-w-full mt-5 text-center lg:text-left"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
