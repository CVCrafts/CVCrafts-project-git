import React, { Component, Fragment } from 'react'
import '../EE.style.css'
export class Educations extends Component {

  render() {
    return (
      <Fragment>
        <section class="education section" id="education">
            <h2 class="section-title">Education</h2>
            <div class="education__container bd-grid">
                <div class="education__content">
                    <div class="education__time">
                        <span class="education__rounder"></span>
                        <span class="education__line"></span>
                    </div>
                    <div class="education__data bd-grid">
                        <h3 class="education__title">Bachelor of Science in Information Technology</h3>
                        <span class="education__studies">University of Punjab</span>
                        <span class="education__year">2018-current</span>
                    </div>
                </div>

                <div class="education__content">
                    <div class="education__time">
                        <span class="education__rounder"></span>
                        {/* <!-- <span class="education__line"></span> --> */}
                    </div>
                    <div class="education__data bd-grid">
                        <h3 class="education__title">Master in UI/UX</h3>
                        <span class="education__studies">University of Punjab</span>
                        <span class="education__year">2018-current</span>
        
                    </div>
                </div>
            </div>
        </section>          
      </Fragment>
    )
  }
}

export default Educations