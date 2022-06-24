import React, { useEffect, useRef, useState } from "react";
import LeftSide from "./cells/LeftSide/LeftSide";
import RightSide from "./cells/RightSide/RightSide";
import TopSection from "./cells/TopSection/TopSection";

const MainTemplate = () => {
  const [height, setHeight] = useState(0);
  const ElementHeigth = useRef();
  let ph = document?.getElementById("body")?.clientHeight;
  useEffect(() => {
    setHeight(ph);
  }, [ph]);
  return (
    <div
      ref={ElementHeigth}
      id={"area-cv"}
      className={`page main w-[118.125mm] bg-transparent mx-auto shadow-sm my-4
      lg:w-[157.5mm] lg:my-4 
      [222.75mm] md:w-[157.5mm] md:my-2 
      [167.0625mm] sm:w-[118.125mm] sm:m-1 `}
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
