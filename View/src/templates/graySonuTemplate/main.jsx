import React from "react";
import LeftSide from "./cells/LeftSide/LeftSide";
import RightSide from "./cells/RightSide/RightSide";
import TopSection from "./cells/TopSection/TopSection";

const MainTemplate = () => {

  return (
    <div
      id={"area-cv"}
      className={`page main w-[118.125mm] bg-transparent mx-auto shadow-sm my-4
      lg:h-[297mm] lg:w-[157.5mm] lg:my-4 
      md:h-0 md:w-[157.5mm] md:my-2 
      sm:h-0 sm:w-[118.125mm] sm:m-1 `}
    >
      <TopSection />
      <div className="clearfix clear-both"></div>
      <LeftSide />
      {/* <div
        className={`line border-l border-solid border-red-300 h-screen mt-[0px] float-left
        `}
      ></div> */}
      <RightSide />
    </div>
  );
};

export default MainTemplate;
