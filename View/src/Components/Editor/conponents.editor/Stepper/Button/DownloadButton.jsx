import React from "react";

const DownloadButton = (props) => {
  return (
    <>
      <button
        type="submit"
        className="border-none cursor-pointer appearance-none
            touch-manipulation flex items-center justify-center outline-none
            hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-10
            text-[15px] min-w-[120px] text-white bg-primaryBlack"
      >
        <i class="bx bx-save mr-2"></i>
        Download
      </button>
    </>
  );
};

export default DownloadButton;
