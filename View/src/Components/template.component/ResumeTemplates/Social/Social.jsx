import React, { Component, Fragment } from 'react'
import './Social.style.css'

export class Social extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <Fragment>
            <section class="social section">
            <h2 class="section-title">SOCIAL</h2>
            <div class="social__container bd-grid">
                <a href="https://www.linkedin.com/"  class="social__link"><i class="bx bxl-linkedin-square social__icon"></i>@Talha</a>
                <a href="https://www.facebook.com/"  class="social__link"><i class="bx bxl-facebook social__icon"></i>@Talha</a>
                <a href="https://www.instagram.com/"  class="social__link"><i class="bx bxl-instagram social__icon"></i>@Talha</a>
            </div>
        </section>      
      </Fragment>
    )
  }
}

export default Social