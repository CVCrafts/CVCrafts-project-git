import React, { useState } from "react";
import { useMemo } from "react";
import useProfileStore from "../../../../../app/cells/profileStore";

const ProfileGraySonu = () => {
  const profile = useProfileStore((state) => state?.profile);
  const [Profile, setProfile] = useState({});
  useMemo(() => {
    return setProfile(profile);
  }, [profile]);
  return (
    <>
      <p
        className={`head text-[.768rem] uppercase font-semibold
      //1.3rem lg:text-[0.868rem]
      md:text-[1rem]
      sm:text-[0.868rem]
      `}
      >
        Profile
      </p>
      <p
        className={`a1 text-gray-500 text-[.533rem] font-semibold mb-1 text-justify break-words
     //0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
      `}
      >
        {Profile?.about}
      </p>
    </>
  );
};

export default ProfileGraySonu;
