import React from "react";
import EducationGraySonu from "./Education-graysonu/Education-GraySonu";
import ExperienceGraySonu from "./Experience-graysonu/Experience-GraySonu";
import ProfileGraySonu from "./Profile-graysonu/Profile-GraySonu";

const RightSide = () => {
  return <div className="col-div-8 w-[62%] float-left">
    <div className="content-box pl-[40px] p-[20px]">
      <ProfileGraySonu />
      <br />
      <ExperienceGraySonu />
      <br />
      <EducationGraySonu/>
    </div>
  </div>;
};

export default RightSide;
