import React, { Component } from "react";
import { Link } from "react-router-dom";
import TemplateResume from "../../../images/ResumeCv_00.png";
import axios from "axios";
class TemplateThum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templateID: props.templateID,
    };
    this.onClickRequestData = this.onClickRequestData.bind(this);
  }

  onClickRequestData = async (event) => {
    await axios.post("http://localhost:5000/resume", {
      data: {
        templateID: event.target.alt,
      },
    });
  };
  render() {
    const { templateID } = this.state;
    return (
      <>
        <div className="templateContainer relative flex justify-center rounded pb-[145%]">
          <Link
            className="templateWrapper w-full absolute rounded "
            to={{
              pathname: "/resume/template",
              state: { templateID },
            }}
          >
            {" "}
            {/*template__fadeOut*/}
            <img
              src={TemplateResume}
              alt={templateID}
              onClick={this.onClickRequestData}
            />
          </Link>
        </div>
      </>
    );
  }
}

export default TemplateThum;
