import React, { useMemo, useState } from "react";
import useEducationStore from "../../../../../app/cells/EducationStore";

const EducationGraySonu = () => {
  const education = useEducationStore((state) => state?.education);
  const [Education, setEducation] = useState({});
  useMemo(() => {
    return setEducation(education);
  }, [education]);
  return (
    <>
      <p
        className={`head text-[.768rem] uppercase font-semibold
      //1.3rem lg:text-[0.868rem]
      md:text-[1rem]
      sm:text-[0.868rem]
      `}
      >
        Education
      </p>
      <div className="education">
        <p
          className={`a1 text-gray-700 text-[.533rem] font-semibold italic
     //0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
      `}
        >
          {education?.start_date.split("-")[0]} {education?.Degree}
        </p>
        <span
          className={`text-gray-500 text-[.533rem] font-semibold italic
             //0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
        `}
        >
          {education?.Institute}, {education?.city} ,{education?.Degree}
        </span>
        <br></br>
        <span
          className={`text-gray-500 text-[.533rem] font-semibold italic
             //0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
        `}
        >
          {education?.CGP} CGP
        </span>
      </div>
    </>
  );
};

export default EducationGraySonu;
