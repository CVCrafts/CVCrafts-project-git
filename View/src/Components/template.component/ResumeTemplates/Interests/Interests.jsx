import React, { Component, Fragment } from 'react'
import './Interest.style.css'

export class Interests extends Component {
  render() {
    return (
      <Fragment>
        <section class="interests section">
            <h2 class='section-title'>Interests</h2>

            <div class='interests__container bd-grid'>
                <div className='interests__content'>
                <i className='bx bx-headphone interests__icon' ></i>
                <span className='interests__name'>Music</span>
                </div>

                <div className='interests__content'>
                <i className='bx bxs-plane-alt interests__icon' ></i>
                <span className='interests__name'>Travel</span>
                </div>

                <div className='interests__content'>
                <i className='bx bx-book interests__icon' ></i>
                <span className='interests__name'>Reading</span>
                </div>

            </div>
        </section>
      </Fragment>
    )
  }
}

export default Interests