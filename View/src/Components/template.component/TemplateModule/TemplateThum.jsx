import React, { useState } from "react";
import { Link } from "react-router-dom";
import TemplateResume from "../../../images/ResumeCv_00.png";
import axios from "axios";

export const TemplateThum = (props) => {
  const [templateID, setTemplateID] = useState();

  const onClickRequestData = async (event) => {
    setTemplateID(event?.target?.alt);
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
            src={TemplateResume}
            alt={props.templateID}
            onClick={onClickRequestData}
          />
        </Link>
      </div>
    </>
  );
};

export default TemplateThum;
