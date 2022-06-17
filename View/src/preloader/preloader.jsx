import React from "react";
import image from "../images/CVCrafts.svg";
const Preloader = () => {
  return (
    <>
      <div className="preloader flex flex-col justify-center items-center self-center">
        <img src={image} alt="loading..." />
      </div>
    </>
  );
};

export default Preloader;
