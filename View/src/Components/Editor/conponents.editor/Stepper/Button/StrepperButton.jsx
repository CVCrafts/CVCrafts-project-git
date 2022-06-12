import React from "react";

const StrepperButton = (props) => {
  return (
    <>
      <button
        className={`${
          props.Back ==="Back"
            ? `bg-white text-red-300 border-2 border-red-300`
            : `bg-green-500 text-white`
        }  uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-red-400 hover:text-white transition duration-200 ease-in-out`}
      >
        {props.Back}
      </button>
    </>
  );
};

export default StrepperButton;
