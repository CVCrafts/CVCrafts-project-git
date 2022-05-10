import React, { Component, Fragment } from 'react'
import '../EE.style.css'



export class Experience extends Component {
  render() {
    return (
      <Fragment>
        <section class="experience section" id="experience">
            <h2 class="section-title">Experience</h2>

            <div class="experience__container bd-grid">
                <div class="experience__content">
                    <div class="experience__time">
                        <span class="experience__rounder">

                        </span>
                        <span class="experience__line">

                        </span>
                    </div>
                    <div class="experience__data bd-grid">
                        <h3 class="experience__title">MASTER OF DESIGN</h3>
                        <span class="experience__company">From 2018 to 2023 | Tech Soft</span>
                        <p class="experience__description">There are many companies which include to fuck other companies to beat their ass to much.</p>
                    </div>
                </div>

                <div class="experience__content">
                    <div class="experience__time">
                        <span class="experience__rounder"></span>
                        {/* <!-- <span class="experience__line"></span> --> */}
                    </div>
                    <div class="experience__data bd-grid">
                        <h3 class="experience__title">MASTER OF DESIGN</h3>
                        <span class="experience__company">From 2018 to 2023 | Tech Soft</span>
                        <p class="experience__description">There are many companies which include to fuck other companies to beat their ass to much.</p>
                    </div>
                </div>
            </div>

        </section>
      </Fragment>
    )
  }
}

export default Experience