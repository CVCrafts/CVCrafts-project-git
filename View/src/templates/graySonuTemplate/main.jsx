import React from "react";
import LeftSide from "./cells/LeftSide/LeftSide";
import RightSide from "./cells/RightSide/RightSide";
import TopSection from "./cells/TopSection/TopSection";

const MainTemplate = () => {
  return (
    <div className="page main h-[297mm] w-[210mm] bg-gray-100 mx-auto shadow-md border-b border-solid border-red-300 my-4">
      <TopSection />
      <div className="clearfix clear-both"></div>
      <LeftSide />
      <div className="line border-l border-solid border-red-300 h-[260mm] mt-[0px] float-left "></div>
      <RightSide />
    </div>
  );
};

export default MainTemplate;
