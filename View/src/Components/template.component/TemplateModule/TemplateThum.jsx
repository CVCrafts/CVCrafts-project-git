import React, { Component } from "react";
import { Link } from "react-router-dom";
import TemplateResume from "../../../images/ResumeCv_00.png";

class TemplateThum extends Component {
  constructor(props) {
    super(props);
      this.state = {
        templateID:props.templateID
    };
  }

    render() {
        const {templateID } = this.state;
    return (
      <>
        <div className="templateContainer relative flex justify-center rounded pb-[145%]">
          <Link
            className="templateWrapper w-full absolute rounded "
            to={{
              pathname: "/resume/content",
              search: `?templateID=${templateID}`,
              state: { templateID },
            }}
          >
            {" "}
            {/*template__fadeOut*/}
            <img src={TemplateResume} alt="" srcset={TemplateResume} />
          </Link>
        </div>
      </>
    );
  }
}

export default TemplateThum;
