import React, { Component, Fragment } from "react";
import "../SL.style.css";

export class Skills extends Component {
  render() {
    return (
      <Fragment>
        <section className="skills section" id="skills">
          <div className="section-title">Skills</div>
          <div className="skills__content bd-grid">
            <ul className="skills__data">
              <li className="skills__name">
                <span className="skills__circle"></span> HTML
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span> CSS
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span> JAVASCRIPT
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span> SCSS
              </li>
            </ul>

            <ul className="skills__data">
              <li className="skills__name">
                <span className="skills__circle"></span> REACT JS
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span> NODE JS
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span> MONGO DB
              </li>
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Skills;
