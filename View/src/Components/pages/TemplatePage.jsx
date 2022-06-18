import "./TemplatePage.style.css";

import ResumeLeft from "../template.component/ResumeTemplates/Resume/ResumeLeft";
import ResumeRigth from "../template.component/ResumeTemplates/Resume/ResumeRigth";
import { useEffect } from "react";

export const TemplatePage = () => {
  useEffect(() => {
    const scaleCv = () => {
      document.body.classList.add("scale-cv");
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
          <ResumeLeft />
          <ResumeRigth />
        </div>
      </main>
      {/* <a href="#" className="scrolltop" id="scroll-top">
                <i className="bx bx-up-arrow-alt scrolltop"></i>
            </a> */}
    </>
  );
};

export default TemplatePage;
