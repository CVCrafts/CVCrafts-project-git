import React, { Component, Fragment } from "react";
import "../EE.style.css";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  const { educationTitle, educationStudies, educationYear } =
    state.educationReducer;
  return {
    educationTitle,
    educationStudies,
    educationYear,
  };
};

export default connect(mapStateToProps,null)(Educations);
