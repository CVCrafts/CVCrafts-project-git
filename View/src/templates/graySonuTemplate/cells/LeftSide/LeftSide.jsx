import React from "react";
import AwardGraySonu from "./Award-graysonu/Award-GraySonu";
import Contact from "./Contact/Contact";
import LanguageGraySonu from "./Language-graysonu/Language-GraySonu";
import SkillGraySonu from "./Skill-graysonu/Skill-GraySonu";

const LeftSide = () => {
  return (
    <div className="col-div-4 w-[35%] float-left bg-gray-50">
      <div className="content-box pl-[40px] p-[20px]">
        <Contact />
        <br />
        <SkillGraySonu />
        <br />
        <AwardGraySonu />
        <br />
        <LanguageGraySonu />
      </div>
    </div>
  );
};

export default LeftSide;
