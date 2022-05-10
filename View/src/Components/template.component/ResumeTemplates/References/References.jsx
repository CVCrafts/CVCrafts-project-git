import React, { Component, Fragment } from 'react'
import './Reference.style.css'
export class References extends Component {
  render() {
    return (
      <Fragment>
        <section class="references section" id="references">
        <div class="section-title">References</div>

        <div class="references__container bd-grid">
            <div class="references__content bd-grid">
                <span class="references__subtitle">Sr. Director</span>
                <h3 class="references__title">Mr. Clay Doe</h3>
                <ul class="references__contact">
                    <li>Phone: 999-888-666</li>
                    <li>Email: user@email.com</li>
                </ul>
            </div>

            <div class="references__content bd-grid">
                <span class="references__subtitle">Sr. Director</span>
                <h3 class="references__title">Mr. Clay Doe</h3>
                <ul class="references__contact">
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