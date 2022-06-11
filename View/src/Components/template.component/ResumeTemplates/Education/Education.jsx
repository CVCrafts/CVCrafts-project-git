import React, { Component, Fragment } from "react";
import "../EE.style.css";
import { connect } from "react-redux";
import EducationContainer from "./Education.component/EducationContainer";

export class Educations extends Component {
  render() {
    return (
      <Fragment>
        <section class="education sectionv " id="education">
          <h2 class="section-title">Education</h2>
          <div class="education__container bd-grid">
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
