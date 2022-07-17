import React, { Component, Fragment } from "react";
import "./Social.style.css";

export class Social extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section className="social section ">
          <h2 className="section-title">SOCIAL</h2>
          <div className="social__container bd-grid">
            <a href="https://www.linkedin.com/" className="social__link">
              <i className="bx bxl-linkedin-square social__icon"></i>@Talha
            </a>
            <a href="https://www.facebook.com/" className="social__link">
              <i className="bx bxl-facebook social__icon"></i>@Talha
            </a>
            <a href="https://www.instagram.com/" className="social__link">
              <i className="bx bxl-instagram social__icon"></i>@Talha
            </a>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Social;
