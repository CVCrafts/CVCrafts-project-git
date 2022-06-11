import React, { Component } from "react";
import { connect } from "react-redux";

export class CertificateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="certificatie__container bd-grid">
          <div className="certificate__content">
            <h3 className="certificate__title">{this.props.certificateName}</h3>
            <p className="certificate__description">
              {this.props.certificateDescription}
            </p>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  const { certificateName, certificateDescription } = state.certificateReducer;
  return {
    certificateName,
    certificateDescription,
  };
};

export default connect(mapStateToProps, null)(CertificateContainer);
