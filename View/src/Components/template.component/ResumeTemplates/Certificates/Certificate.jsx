import React, { Component, Fragment } from "react";
import CertificateContainer from "./Certificate.component/CertificateContainer";
import "./Certificate.style.css";
export class Certificates extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section
          className="certificate section"
          id="certificates"
        >
          <h2 class="section-title">Certificates</h2>
          <CertificateContainer />
        </section>
      </Fragment>
    );
  }
}

export default Certificates;
