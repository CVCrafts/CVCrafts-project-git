import "./TemplatePage.style.css";

import html2pdf from "html2pdf.js/dist/html2pdf";

import ResumeLeft from "../template.component/ResumeTemplates/Resume/ResumeLeft";
import ResumeRigth from "../template.component/ResumeTemplates/Resume/ResumeRigth";

export const TemplatePage = () => {
  const themeChange = (e) => {
    e.preventDefault();
    const themeButton = document.getElementById("theme-button");

    const darkTheme = "dark-theme";
    const iconTheme = "bx-sun";

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // We obtain the current theme that the interface has by validating the dark-theme className
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";

    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );

      themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
        iconTheme
      );
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener("click", () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      // document.querySelector(".root").classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    });
  };
  const scaleCv = () => {
    document.body.classList.add("scale-cv");
  };
  scaleCv();
  const removeScale = () => {
    document.body.classList.remove("scale-cv");
  };

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
