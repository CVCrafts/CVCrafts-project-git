import React, { useEffect, useState } from "react";
import Summery from "./conponents.editor/FormSection/Summery";
import DesignSummery from "./conponents.editor/FormSection/Design-Summery";
import TemplatePage from "../pages/TemplatePage";
import MainTemplate from "../../templates/graySonuTemplate/main";

import pdfDownload from "./cells/editor.util";

import "./Editor.style.css";
import { Link } from "react-router-dom";
import { useEditorStore } from "../../app/EditorStore/EditorStore";

export const Editor = (props) => {
  const [_section_] = useState([
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
  ]);
  const [_state_, setState] = useState(props?.state);

  const whichTemplate = useEditorStore((state) => state?.whichTemplate);
  const stateCaller = (e) => setState(e?.target?.attributes[1]?.nodeValue);
  const pdfCaller = () => {
    return pdfDownload("area-cv");
  };
  console.log(_state_);

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
              onClick={pdfCaller}
            >
              <i className="bx bx-save mr-2"></i>
              Download
            </button>
          </div>
          <button
            type={"button"}
            className={`border-none cursor-pointer appearance-none ml-2
            touch-manipulation flex items-center justify-center self-center content-center outline-none
            hover:opacity-80 px-3 py-1 rounded-full font-extrabold h-10
            text-[1rem] min-w-[60px] text-white bg-primaryBlack`}
            onClick={() => null}
          >
            <i className="bx bx-save"></i>
          </button>
          <Link
            to={"/resume/content"}
            state={{ state: "content" }}
            onClick={stateCaller}
          >
            <i
              className="bx bx-md bxs-book-content absolute left-0 ml-4 cursor-pointer hover:text-red-300"
              state={"content"}
            ></i>
          </Link>
          <Link
            to={"/resume/editor"}
            state={{ state: "design" }}
            onClick={stateCaller}
          >
            <i
              className="bx bx-md bxl-sketch absolute left-12 ml-4 cursor-pointer hover:text-red-300"
              state={"design"}
            ></i>
          </Link>
        </div>

        {_state_ !== "design"
          ? _section_.map((items, index) => {
              return <Summery Section={items} key={index} />;
            })
          : _section_.map((items, index) => {
              return <DesignSummery Section={items} key={index} />;
            })}
      </div>
      <div
        className="absolute w-[67%] h-auto right-0 top-0 md-max-width:hidden "
        id="body"
      >
        {whichTemplate === "GraySonu" ? (
          <MainTemplate id={"area-cv"} />
        ) : (
          <TemplatePage id={"area-cv"} />
        )}
      </div>
    </div>
  );
};

export default Editor;
