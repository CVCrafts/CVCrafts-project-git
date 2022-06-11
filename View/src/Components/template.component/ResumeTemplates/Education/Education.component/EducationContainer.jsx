import React, { Component } from "react";
import { connect } from "react-redux";

export class EducationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islast: true,
    };
  }

  render() {
    return (
      <>
        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
            {!this.state.islast ? <span className="education__line"></span> : ""}
          </div>
          <div className="education__data bd-grid">
            <h3 className="education__title">{this.props.educationTitle}</h3>
            <span className="education__studies">
              {this.props.educationStudies}
            </span>
            <span className="education__year">{this.props.educationYear}</span>
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
