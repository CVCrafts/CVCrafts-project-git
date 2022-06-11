import React, { Component, Fragment } from "react";
import "../EE.style.css";

export class Experience extends Component {
  render() {
    return (
      <Fragment>
        <section className="experience section " id="experience">
          <h2 className="section-title">Experience</h2>

          <div className="experience__container bd-grid">
            <div className="experience__content">
              <div className="experience__time">
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div className="experience__data bd-grid">
                <h3 className="experience__title">MASTER OF DESIGN</h3>
                <span className="experience__company">
                  From 2018 to 2023 | Tech Soft
                </span>
                <p className="experience__description">
                  There are many companies which include to fuck other companies
                  to beat their ass to much.
                </p>
              </div>
            </div>

            <div className="experience__content">
              <div className="experience__time">
                <span className="experience__rounder"></span>
                {/* <!-- <span className="experience__line"></span> --> */}
              </div>
              <div className="experience__data bd-grid">
                <h3 className="experience__title">MASTER OF DESIGN</h3>
                <span className="experience__company">
                  From 2018 to 2023 | Tech Soft
                </span>
                <p className="experience__description">
                  There are many companies which include to fuck other companies
                  to beat their ass to much.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Experience;
