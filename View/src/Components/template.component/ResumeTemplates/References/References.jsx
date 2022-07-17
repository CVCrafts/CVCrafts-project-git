import React, { Component, Fragment } from 'react'
import './Reference.style.css'

export class References extends Component {
  render() {
    return (
      <Fragment>
        <section className="references section" id="references">
        <div className="section-title">References</div>

        <div className="references__container bd-grid">
            <div className="references__content bd-grid">
                <span className="references__subtitle">Sr. Director</span>
                <h3 className="references__title">Mr. Clay Doe</h3>
                <ul className="references__contact">
                    <li>Phone: 999-888-666</li>
                    <li>Email: user@email.com</li>
                </ul>
            </div>

            <div className="references__content bd-grid">
                <span className="references__subtitle">Sr. Director</span>
                <h3 className="references__title">Mr. Clay Doe</h3>
                <ul className="references__contact">
                    <li>Phone: 999-888-666</li>
                    <li>Email: user@email.com</li>
                </ul>
            </div>

        </div>
        </section>
      </Fragment>
    )
  }
}

export default References