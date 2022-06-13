import React, { Component } from "react";
import DownloadButton from "./conponents.editor/Stepper/Button/DownloadButton";
import Stepper from "./conponents.editor/Stepper/Stepper";
import StepperControl from "./conponents.editor/Stepper/StepperControl";
import "./Editor.style.css";
export class Editor extends Component {
  render() {
    return (
      <>
        <div className="absolute top-0 bottom-0 md-max-width:w-full w-1/2 mx-auto shadow-xl rounded-xl pb-2 bg-white">
          <div className="absolute top-0 right-0 h-16 w-full bg-gray-100 flex justify-end py-3 pr-6">
            <DownloadButton />
            <i className="bx bx-md bxs-book-content absolute left-0 ml-4 cursor-pointer hover:text-red-300"></i>
            <i class="bx bx-md bxl-sketch absolute left-12 ml-4 cursor-pointer hover:text-red-300"></i>
          </div>

          {/* <div className="container horizontal mt-5">
            <Stepper />
          </div>

          <StepperControl /> */}
        </div>
      </>
    );
  }
}

export default Editor;
