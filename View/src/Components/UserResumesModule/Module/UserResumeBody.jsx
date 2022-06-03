import React, { Component } from "react";
import UserImage from "../../../images/UserResumeSVG.svg"
import UserResumeContent from "./UserResumeContent";
class UserResumeBody extends Component {
  render() {
    return (
      <>
        <div className="mx-auto w-full max-w-[1100px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="pt-8 lg:pt-24">
            <div className="grid w-full grid-cols-1 justify-items-center lg:grid-cols-[1fr_min-content] lg:gap-2 xl:w-[110%]">
              <div className=" relative w-[100px] md:w-[120px] lg:order-2 lg:w-[310px] xl:w-[340px]">
                {/* Logo and svg image */}
                {/* <img
                  className="ml-2 w-full lg:px-1"
                  src={UserImage}
                  alt=""
                  srcset={UserImage}
                /> */}
                
              </div>
              <div className="mt-10 w-full md:mt-12 lg:mt-8">
                <h1 className="text-center text-4xl font-extrabold md:text-5xl lg:text-left lg:text-6xl">
                  Let's boost your profession
                </h1>
                <h2 className="mt-4 text-center text-lg text-gray-500 md:text-xl lg:text-left lg:text-2xl">
                  Showcase your skills and talents. Make a great first
                  impression.
                </h2>
              </div>
            </div>
          </div>
          <UserResumeContent/>
        </div>
      </>
    );
  }
}

export default UserResumeBody;
