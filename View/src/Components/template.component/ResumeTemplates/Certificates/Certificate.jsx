import React, { Component, Fragment } from 'react'
import './Certificate.style.css'
export class Certificates extends Component {
  render() {
    return (
      <Fragment>
        <section class="certificate section" id="certificates" contentEditable='false'>
                    <h2 class="section-title">Certificates</h2>

                    <div class="certificatie__container bd-grid">
                        <div class="certificate__content">
                            <h3 class="certificate__title">Certified for compliance in the...</h3>
                            <p class="certificate__description">It is a description that highlights your skills and expertise and it shows employers what assets you will bring to the role you are applying for.
                                It is a description that highlights your skills and expertise and it shows employers what assets you will bring to the role you are applying for.
                                It is a description that highlights your skills and expertise and it shows employers what assets you will bring to the role you are applying for.</p>
                        </div>
                    </div>
                </section>
      </Fragment>
    )
  }
}

export default Certificates