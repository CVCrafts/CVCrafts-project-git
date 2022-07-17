import React, { Component } from "react";

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
            <h3 className="certificate__title">React js</h3>
            <p className="certificate__description">
              React is a declarative, efficient, and flexible JavaScript library
              for building user interfaces. It lets you compose complex UIs from
              small and isolated pieces of code called “components”.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default CertificateContainer;
