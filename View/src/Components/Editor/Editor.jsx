import React, { Component } from "react";
import Summery from "./conponents.editor/FormSection/Summery";
import DownloadButton from "./conponents.editor/Stepper/Button/DownloadButton";
import TemplatePage from "../pages/TemplatePage";
import  html2pdf  from "html2pdf.js";
import "./Editor.style.css";

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
    };
    this.pdfDownload = this.pdfDownload.bind(this);
  }
  pdfDownload = () => {
    var areaCV = document.getElementById("area-cv");
    var opt = {
      margin: 0,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.99 },
      //   pagebreak: {
      //     mode: ['avoid-all', 'css', 'legacy']
      // },
      pagebreak: {
        mode: ["css", "avoid-all", "legacy"],
        // avoid: ["tr","breakPage","p","span","h1","h2","h3","h4","section","div","Fragment"],
        after: ".page-break",
        before: ".page-break",
      },
      // pagebreak: {
      //   before: ".newPage",
      //   avoid: ["h2", "tr", "h3", "h4", ".field","p","span","div","section","main","h1","Fragment"]
      // },
      html2canvas: { scale: 1, dpi: 192, letterRendering: true },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };
    // html2pdf(areaCV, opt);
    html2pdf()
      .set(opt)
      .from(areaCV)
      .save()
  };
  render() {
    const { _section_ } = this.state;

    return (
      <div className="">
        <div className=" absolute bottom-0 top-0 left-0 lg-max-width:w-full w-1/2 mx-auto shadow-xl rounded-xl pb-2 bg-white">
          <div className="top-0 right-0 w-full rounded-md shadow-lg z-10 bg-gray-100 flex justify-end py-3 pr-6">
            <button
              type={"button"}
              className="border-none cursor-pointer appearance-none
            touch-manipulation flex items-center justify-center outline-none
            hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-10
            text-[15px] min-w-[120px] text-white bg-primaryBlack"
              onClick={this.pdfDownload}
            >
              <i className="bx bx-save mr-2"></i>
              Download
            </button>
            <i className="bx bx-md bxs-book-content absolute left-0 ml-4 cursor-pointer hover:text-red-300"></i>
            <i class="bx bx-md bxl-sketch absolute left-12 ml-4 cursor-pointer hover:text-red-300"></i>
          </div>

          {_section_.map((items, index) => {
            return <Summery Section={items} key={index} />;
          })}
        </div>
        <div className=" absolute w-1/2 right-0 lg-max-width:hidden">
          <TemplatePage id="area-cv" />
        </div>
      </div>
    );
  }
}

export default Editor;
