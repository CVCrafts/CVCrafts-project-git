import React, { Component } from "react";
import { connect } from "react-redux";

class EducationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islast: true,
    };
  }

  render() {
    return (
      <>
        <div class="education__content">
          <div class="education__time">
            <span class="education__rounder"></span>
            {!this.state.islast ? <span class="education__line"></span> : ""}
          </div>
          <div class="education__data bd-grid">
            <h3 class="education__title">{this.props.educationTitle}</h3>
            <span class="education__studies">
              {this.props.educationStudies}
            </span>
            <span class="education__year">{this.props.educationYear}</span>
          </div>
        </div>
      </>
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

export default connect(mapStateToProps, null)(EducationContainer);
