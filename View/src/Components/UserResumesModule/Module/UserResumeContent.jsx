import React, { Component } from "react";
import ContentElement from "./ContentElement";
import UserResumeSVG from "../../../images/UserResumeRedSVG.svg";

class UserResumeContent extends Component {
  render() {
    return (
      <>
        <div className="pt-16 md:pt-24 lg:pt-32">
          <div className="">
            <h2 className="mx-5 text-2xl font-bold md:mx-0 md:text-3xl lg:text-4xl">
              Resumes
            </h2>
            <p className="mx-5 text-sm text-gray-500 md:mx-0 md:mt-3 md:text-base">
              Your first resume – 100% free, forever, all features, unlimited
              downloads, yes really.
            </p>
            <div className="mt-6 grid grid-cols-1 grid-flow-row w-full justify-start gap-3 md:mt-10 md:grid-cols-none">
              <div className="hidden h-[200px] w-[200px] items-center justify-center rounded-full border-[10px] border-solid border-white md:flex lg:flex">
                {/* svg here */}
                <img
                  src={UserResumeSVG}
                  alt="{UserResumeSVG}"
                  srcset={UserResumeSVG}
                />
              </div>
              <div className="">
                {/* list of resume select */}
                <ContentElement />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserResumeContent;
