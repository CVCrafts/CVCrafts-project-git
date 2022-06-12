import React from "react";
import StrepperButton from "./Button/StrepperButton";

const StepperControl = () => {
  return (
    <>
      <div className="container flex justify-around mt-4 mb-8">
        {/* Back button */}
        <StrepperButton Back={"Back"} />
        {/* Next button */}
        <StrepperButton Back={"Next"} />
      </div>
    </>
  );
};

export default StepperControl;
