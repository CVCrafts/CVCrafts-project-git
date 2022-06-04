
import React, { Component, Fragment } from 'react'
import './Home.style.css'

export class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        HomeTitle: "Muhammad Talha"
      }
    }
     
  render() {
    return (
      <Fragment>
            <section class="home" id="home" >
              <div class="home__container section bd-grid">
                  <div class="home__data bd-grid">
                      <img src={""} alt="" class="home__img" hidden/>
                      <h1 class="home__title" title='home__title'>{this.state.HomeTitle}</h1>
                      <h3 class="home__profession" title='home__profession'>Full Stack Developer</h3>
                  
                      <div class="block">
                          <a download="" href="assets/pdf/ResumeCv.pdf" class="home__button-movil"> download</a>
                      </div>
                  </div>
                  <div class="home__address bd-grid">
                      <span class="home__information" title='home__information_city'>
                          <i class="bx bx-map  home__icon"></i> 
                          Pakistan,Lahore</span>
                      <span class="home__information" title='home__information_email' >
                          <i class="bx bx-envelope home__icon"></i> mian123@gmail.com</span>
                      <span class="home__information" title='home__information_phone'>
                          <i class="bx bx-phone home__icon"></i>+92xxx-xxxxxxx</span>
                  </div>
              </div>
            {/* <!-- Theme change button --> */}

            {/* <!-- Button to generate and download the pdf. Available for desktop. --> */}
        </section>  
      </Fragment>
    )
  }
}

export default Home