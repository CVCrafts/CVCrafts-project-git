import React from "react";

const SkillGraySonu = () => {
  return (
    <>
      <p
        className={`head text-[.768rem] uppercase font-semibold
      //1.3rem lg:text-[0.868rem]
      md:text-[1rem]
      sm:text-[0.868rem]
      `}
      >
        Skill
      </p>
      <ul className="ml-[0] mb-0">
        <li className="">
          <span
            className={`a1 text-gray-500 text-[.533rem] font-semibold mb-1
      // 0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
      `}
          >
            Web Design
          </span>
        </li>
        <li className="">
          <span
            className={`a1 text-gray-500 text-[.533rem] font-semibold mb-1
      // 0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
      `}
          >
            Microsoft Power BI
          </span>
        </li>
        <li className="">
          <span
            className={`a1 text-gray-500 text-[.533rem] font-semibold mb-1
      // 0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
      `}
          >
            Software Quality Assurance
          </span>
        </li>
      </ul>
    </>
  );
};

export default SkillGraySonu;
