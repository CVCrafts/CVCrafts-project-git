import "./TemplatePage.style.css";

import React, { useEffect, useState } from "react";
import ResumeLeft from "../template.component/ResumeTemplates/Resume/ResumeLeft";
import ResumeRigth from "../template.component/ResumeTemplates/Resume/ResumeRigth";

export const TemplatePage = () => {
  const [resume] = useState([<ResumeLeft />, <ResumeRigth />]);
  useEffect(() => {
    const scaleCv = () => {
      document?.querySelector("#body")?.classList?.add("scale-cv");
      // document.body.classList.add("scale-cv");
    };
    scaleCv();
    return () => {
      scaleCv();
    };
  }, []);
  return (
    <>
      {/* <i
          className="bx bx-moon change-theme"
          title="Theme"
          id="theme-button"
          onClick={this.themeChange}
        ></i>
        <i
          className="bx bx-download generate-pdf"
          title="Generate PDF"
          id="resume-button"
          onClick={this.pdfDownload}
        ></i> */}
      <main className="l-main bd-container">
        {/* <!-- All elements within this div, is generated in PDF --> */}
        <div className="resume" id="area-cv">
          {resume.map((items) => items)}
        </div>
      </main>
      {/* <a href="#" className="scrolltop" id="scroll-top">
                <i className="bx bx-up-arrow-alt scrolltop"></i>
            </a> */}
    </>
  );
};

export default TemplatePage;
