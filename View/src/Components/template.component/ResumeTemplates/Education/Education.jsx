import React, { Component, Fragment } from "react";
import "../EE.style.css";
import EducationContainer from "./Education.component/EducationContainer";

export class Educations extends Component {
  render() {
    return (
      <Fragment>
        <section className="education sectionv " id="education">
          <h2 className="section-title">Education</h2>
          <div className="education__container bd-grid">
            <EducationContainer />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Educations;
