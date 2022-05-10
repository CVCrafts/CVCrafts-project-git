
import './TemplatePage.style.css'

import html2pdf from 'html2pdf.js';
// import html2canvas from 'html2canvas';
import { Component } from 'react';
import ResumeLeft from '../template.component/ResumeTemplates/Resume/ResumeLeft'
import ResumeRigth from '../template.component/ResumeTemplates/Resume/ResumeRigth';

class TemplatePage extends Component {
    constructor(props) {
      super(props)
      this.scaleCv = this.scaleCv.bind(this);
      this.removeScale = this.removeScale.bind(this);
      this.pdfDownload = this.pdfDownload.bind(this);
      this.themeChange = this.themeChange.bind(this)
    }

    themeChange = (e) =>{
      e.preventDefault();
      const themeButton = document.getElementById('theme-button')

      const darkTheme = 'dark-theme'
      const iconTheme = 'bx-sun'

      // Previously selected topic (if user selected)
      const selectedTheme = localStorage.getItem('selected-theme')
      const selectedIcon = localStorage.getItem('selected-icon')
      
      // We obtain the current theme that the interface has by validating the dark-theme class
      const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

      const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
      
      // We validate if the user previously chose a topic
      if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)

        themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
      }
      
      // Activate / deactivate the theme manually with the button
      themeButton.addEventListener('click', () => {
          // Add or remove the dark / icon theme
          document.body.classList.toggle(darkTheme)
          // document.querySelector(".root").classList.toggle(darkTheme)
          themeButton.classList.toggle(iconTheme)
          // We save the theme and the current icon that the user chose
          localStorage.setItem('selected-theme', getCurrentTheme())
          localStorage.setItem('selected-icon', getCurrentIcon())
      })
    }
    scaleCv = () =>
    {
      document.body.classList.add('scale-cv')
    }
    removeScale = () =>
    {
      document.body.classList.remove('scale-cv')
    }
    pdfDownload = () =>{
      
      // this.scaleCv();
      // let doc = new jsPDF('p','pt','a4');
      // doc.html(document.querySelector("#area-cv"), {
      //   callback: (pdf) => {
      //     pdf.save("mypdf.pdf");
      //   }
      // });
      var areaCV = document.querySelectorAll('.resume');
      var opt = {
        margin:       0,
        filename:     'myfile.pdf',
        image:        { type: 'png', quality: 0.99 },
      //   pagebreak: { 
      //     // mode: ['avoid-all', 'css', 'legacy'] 
      // },
        pagebreak: {
          // mode: ["css","avoid-all"],
          avoid: ["tr","breakPage","p","span","h1","h2","h3","h4","section","main"],
          after: ".newPage",
          before: ".newPrior"
        },
        // pagebreak: {
        //   before: ".newPage",
        //   avoid: ["h2", "tr", "h3", "h4", ".field","p","span","div","section","main","h1","Fragment"]
        // },
        html2canvas:  { scale: 1, logging: true, dpi: 192, letterRendering: true, backgroundColor: null ,removeContainer: true},
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait'}
      };
      areaCV.forEach((cv) => {
        html2pdf(cv, opt);
      })
      // html2pdf().set(opt).from(areaCV).save()
      setTimeout(()=>{
        // this.removeScale()
      },10000);
    }
    componentDidMount(){
      this.scaleCv()
      
    }
  render()
  {
      return (
        <>
        <i class="bx bx-moon change-theme" title="Theme" id="theme-button" onClick={this.themeChange}></i>
        <i class="bx bx-download generate-pdf" title="Generate PDF" id="resume-button" onClick={this.pdfDownload}></i>
         <main class="l-main bd-container">
                {/* <!-- All elements within this div, is generated in PDF --> */}
                <div class="resume" id="area-cv" >
                    <ResumeLeft/>
                    <ResumeRigth/>

                </div>           
            </main>
            {/* <a href="#" class="scrolltop" id="scroll-top">
                <i class="bx bx-up-arrow-alt scrolltop"></i>
            </a> */}
        </>
      );
    }

}

export default TemplatePage;
