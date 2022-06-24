import React from "react";

const TopSection = () => {
  return (
    <div className="topSection bg-gray-300 text-center p-[20px] w-[100%]">
      <p
        className={`p1 text-white text-[2rem] font-bold m-0 mt-[10px]
    /*2.768rem*/  lg:text-[1rem] 
      md:text-[2rem]
      sm:text-[1rem]
      `}
      >
        Muhammad<span className="sp1 font-thin text-red-400"> Talha</span>
      </p>
      <p
        className={`p2 text-[1.5rem] text-red-400 font-semibold m-0 mt-[10px]
     /*1.333rem*/ lg:text-[0.484rem]
      md:text-[0.968rem]
      sm:text-[0.484rem]
      `}
      >
        UI / UX Designer
      </p>
    </div>
  );
};

export default TopSection;
