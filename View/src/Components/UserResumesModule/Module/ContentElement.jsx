import React from "react";
import ResumeList from "./ListsOfResumeUserCreate/ResumeList";

export const ContentElement = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <details className=" relative bg-white w-full shadow rounded group">
          <summary className="list-none flex flex-wrap items-center cursor-pointer w-full  lg:w-full">
            <h3 className="flex flex-1 p-4 font-semibold">Resumes</h3>
            <div className="flex w-10 items-center justify-center">
              <div className="border-8 border-transparent border-l border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left">
                <i className="bx bxs-right-arrow bx-flip-vertical group-open:text-red-400"></i>
              </div>
            </div>
          </summary>
          <div className="p-4">
            <ResumeList />
          </div>
        </details>
      </div>
    </>
  );
};

export default ContentElement;
