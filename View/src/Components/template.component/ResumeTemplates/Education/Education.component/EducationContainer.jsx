import React, { Component } from "react";

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
            <h3 className="education__title">Software Desgin</h3>
            <span className="education__studies">
              PU
            </span>
            <span className="education__year">current</span>
          </div>
        </div>
      </>
    );
  }
}


export default EducationContainer;
