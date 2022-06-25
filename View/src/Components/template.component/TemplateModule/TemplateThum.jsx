import React, { useState } from "react";
import { Link } from "react-router-dom";
import TemplateResume from "../../../images/ResumeCv_00.png";
import GraySonuResume from "../../../images/GraySonuResume.png";
import axios from "axios";
import { useEditorStore } from "../../../app/EditorStore/EditorStore";

export const TemplateThum = (props) => {
  const [templateID, setTemplateID] = useState();

  const onSetWhichTemplate = useEditorStore(
    (state) => state.onSetWhichTemplate
  );
  const onClickRequestData = async (event) => {
    await setTemplateID(event?.target?.alt);
    await onSetWhichTemplate(event?.target?.alt);
    await axios.post("http://localhost:5000/resume", {
      data: {
        templateid: event?.target?.alt,
      },
    });
  };
  return (
    <>
      <div className="templateContainer relative flex justify-center rounded pb-[145%]">
        <Link
          className="templateWrapper w-full absolute rounded "
          to={{
            pathname: "/resume/content",
            state: { templateID },
          }}
        >
          {" "}
          {/*template__fadeOut*/}
          <img
            src={
              props.templateID === "GraySonu" ? GraySonuResume : TemplateResume
            }
            alt={props.templateID}
            onClick={onClickRequestData}
            className={`h-[110mm] w-[110mm]`}
          />
        </Link>
      </div>
    </>
  );
};

export default TemplateThum;
