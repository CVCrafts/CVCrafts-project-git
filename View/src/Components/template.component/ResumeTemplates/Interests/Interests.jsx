import React, { Fragment, useEffect, useState } from "react";
import "./Interest.style.css";
import useInterestStore from "../../../../app/cells/InterestStore";

export const Interests = (props) => {
  const [Interest, setInterest] = useState({});
  const interest = useInterestStore((state) => state?.interest);
  useEffect(() => {
    interest && setInterest(interest)
  },[interest])
  return (
    <Fragment>
      <section className="interests section">
        <h2 className="section-title">Interest</h2>

        <div className="interests__container bd-grid">
          <div className="interests__content">
            <i className="bx bx-headphone interests__icon"></i>
            <span className="interests__name">{Interest?.Interest}</span>
          </div>

          <div className="interests__content">
            <i className="bx bxs-plane-alt interests__icon"></i>
            <span className="interests__name">Travel</span>
          </div>

          <div className="interests__content">
            <i className="bx bx-book interests__icon"></i>
            <span className="interests__name">Reading</span>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Interests;
