import React, { Component } from "react";
import Stepper from "./conponents.editor/Stepper/Stepper";
import StepperControl from "./conponents.editor/Stepper/StepperControl";
import "./Editor.style.css";
export class Editor extends Component {
  render() {
    return (
      <>
        <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
          <div className="container horizontal mt-5">
            <Stepper />
          </div>

          <StepperControl />
        </div>
      </>
    );
  }
}

export default Editor;
