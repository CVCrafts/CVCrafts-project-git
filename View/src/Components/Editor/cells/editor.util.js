import html2pdf from "html2pdf.js";

export const pdfDownload = (id) => {
  var areaCV = document.getElementById(id);
  var opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.99 },
    //   pagebreak: {
    //     mode: ['avoid-all', 'css', 'legacy']
    // },
    pagebreak: {
      mode: ["css", "avoid-all", "legacy"],
      avoid: ["tr","breakPage","p","span","h1","h2","h3","h4","section","div","Fragment"],
      after: ".page-break",
      before: ".page-break",
    },
    // pagebreak: {
    //   before: ".newPage",
    //   avoid: ["h2", "tr", "h3", "h4", ".field","p","span","div","section","main","h1","Fragment"]
    // },
    html2canvas: { scale: 1, dpi: 300, letterRendering: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  // html2pdf(areaCV, opt);
  html2pdf().set(opt).from(areaCV).save();
};

export const handleChange = (functionalSet, functionData, event) => {
  if (event) {
    let { name, value } = event?.target;
    functionalSet({
      ...functionData,
      [name]: value,
    });
  }
};

export default pdfDownload;

// const removeScale = () => {
//   document.body.classList.remove("scale-cv");
// };

// const themeChange = (e) => {
//   e.preventDefault();
//   const themeButton = document.getElementById("theme-button");

//   const darkTheme = "dark-theme";
//   const iconTheme = "bx-sun";

//   // Previously selected topic (if user selected)
//   const selectedTheme = localStorage.getItem("selected-theme");
//   const selectedIcon = localStorage.getItem("selected-icon");

//   // We obtain the current theme that the interface has by validating the dark-theme className
//   const getCurrentTheme = () =>
//     document.body.classList.contains(darkTheme) ? "dark" : "light";

//   const getCurrentIcon = () =>
//     themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

//   // We validate if the user previously chose a topic
//   if (selectedTheme) {
//     // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//     document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//       darkTheme
//     );

//     themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
//       iconTheme
//     );
//   }

//   // Activate / deactivate the theme manually with the button
//   themeButton.addEventListener("click", () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme);
//     // document.querySelector(".root").classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme);
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem("selected-theme", getCurrentTheme());
//     localStorage.setItem("selected-icon", getCurrentIcon());
//   });
// };
