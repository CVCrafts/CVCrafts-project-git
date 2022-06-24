import React, { Component } from "react";
import Summery from "./conponents.editor/FormSection/Summery";
import DesignSummery from "./conponents.editor/FormSection/Design-Summery";
// import TemplatePage from "../pages/TemplatePage";
import MainTemplate from "../../templates/graySonuTemplate/main";

import pdfDownload from "./cells/editor.util";

import "./Editor.style.css";
import { Link } from "react-router-dom";

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _section_: [
        "personal",
        "profile",
        "skill",
        "certificate",
        "award",
        "experience",
        "language",
        "interest",
        "course",
        "organization",
        "references",
        "projects",
        "publication",
      ],
      _state_: props.state,
    };
    this.pdfCaller = this.pdfCaller.bind(this);
    this.stateCaller = this.stateCaller.bind(this);
    this.myRef = React.createRef();
  }
  stateCaller = (e) =>
    this.setState({ _state_: e?.target?.attributes[1]?.nodeValue });
  pdfCaller = () => pdfDownload("area-cv");

  componentDidUpdate = () => {
    this.state._state_ === "design"
      ? window.location.replace("/resume/editor")
      : window.location.replace("/resume/content");
    window.location.replace();
  };
  render() {
    return (
      <div className=" h-full">
        <div className=" absolute h-full top-0 overflow-y-auto left-0 md-max-width:w-full w-[33%] mx-auto rounded-xl pb-2 ">
          <div className="top-0 right-0 w-full rounded-md shadow-lg z-10 bg-gray-100 flex justify-end py-3 pr-6 lg-max-width: h-16">
            <div className=" lg-max-width:block">
              <button
                type={"button"}
                className="border-none cursor-pointer appearance-none
            touch-manipulation flex items-center justify-center outline-none
            hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-10
            text-[15px] min-w-[120px] text-white bg-primaryBlack"
                onClick={this.pdfCaller}
              >
                <i className="bx bx-save mr-2"></i>
                Download
              </button>
            </div>
            <Link
              to={"/resume/content"}
              state={{ state: "content" }}
              onClick={this.stateCaller}
            >
              <i
                className="bx bx-md bxs-book-content absolute left-0 ml-4 cursor-pointer hover:text-red-300"
                state={"content"}
              ></i>
            </Link>
            <Link
              to={"/resume/editor"}
              state={{ state: "design" }}
              onClick={this.stateCaller}
            >
              <i
                className="bx bx-md bxl-sketch absolute left-12 ml-4 cursor-pointer hover:text-red-300"
                state={"design"}
              ></i>
            </Link>
          </div>

          {this.state._state_ !== "design"
            ? this.state._section_.map((items, index) => {
                return <Summery Section={items} key={index} />;
              })
            : this.state._section_.map((items, index) => {
                return <DesignSummery Section={items} key={index} />;
              })}
        </div>
        <div
          className="absolute w-[67%] h-auto right-0 top-0 md-max-width:hidden "
          id="body"
        >
          {/* <TemplatePage id={"area-cv"} /> */}
          <MainTemplate id={"area-cv"} />
        </div>
      </div>
    );
  }
}

export default Editor;
