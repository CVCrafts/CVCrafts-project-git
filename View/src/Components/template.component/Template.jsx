import React, { Component } from "react";
import "./template.style.css";
import TemplateThum from "./TemplateModule/TemplateThum";
export class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: ["bw_1", "GraySonu", "bw_3"],
    };

  }

  render() {
    const { template } = this.state;
    return (
      <React.Fragment>
        <section className="bg-lightGray">
          <div className="landingPageContainer pt-18 px-8 pb-24">
            <div className="flex flex-col lg:items-center">
              <h2 className="text-3xl xl:text-4xl font-extrabold text-strong">
                Free CVs templates
              </h2>
              <p className="max-w-full mt-4 leading-relaxed md:text-xl">
                Choose a template and customize it&nbsp;quickly
              </p>
              <div className="mt-6 md:mt-7 lg:mt-8 h-[2px] w-[3rem] bg-primaryBlack"></div>
              <div className="mt-8 md:mt-9 lg:mt-10 w-full m-w-[1200px]">
                <div>
                  <div
                    className="lazy grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-x-8 entered"
                    data-lazy-function=""
                    data-ll-status="entered"
                  >
                    {template.map((TemplateThums, index) => {
                      return (
                        <TemplateThum key={index} templateID={TemplateThums}/>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Template;
