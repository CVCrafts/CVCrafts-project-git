import React, { useState } from "react";
import { useMemo } from "react";
import useExperienceStore from "../../../../../app/cells/ExperienceStore";

const ExperienceGraySonu = () => {
  const experience = useExperienceStore((state) => state?.experience);
  const [Experience, setExperience] = useState({});
  useMemo(() => {
    return setExperience(experience);
  }, [experience]);
  return (
    <>
      <p
        className={`head text-[.768rem] uppercase font-semibold
      //1.3rem lg:text-[0.868rem]
      md:text-[1rem]
      sm:text-[0.868rem]
      `}
      >
        Experience
      </p>
      <div className="experience">
        <p
          className={`a1 text-gray-500 text-[.533rem] font-semibold mb-1
     //0.868rem lg:text-[.633rem]
      md:text-[.633rem]
      sm:text-[.533rem]
      `}
        >
          {Experience?.Job_Title} , {Experience?.Employer} (
          {Experience?.start_date?.split("-")[0]} -
          {Experience?.End_date?.split("-")[0]})
        </p>
        <p
          className={`a1 text-gray-500 text-[.533rem] font-semibold mb-1 text-justify break-words
     //0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
      `}
        >
          {Experience?.Description}
        </p>
      </div>
    </>
  );
};

export default ExperienceGraySonu;
