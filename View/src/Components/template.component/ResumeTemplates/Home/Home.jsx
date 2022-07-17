
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
            <section className="home" id="home" >
              <div className="home__container section bd-grid">
                  <div className="home__data bd-grid">
                      <img src={""} alt="" className="home__img" hidden/>
                      <h1 className="home__title" title='home__title'>{this.state.HomeTitle}</h1>
                      <h3 className="home__profession" title='home__profession'>Full Stack Developer</h3>
                  
                      <div className="block">
                          <a download="" href="assets/pdf/ResumeCv.pdf" className="home__button-movil"> download</a>
                      </div>
                  </div>
                  <div className="home__address bd-grid">
                      <span className="home__information" title='home__information_city'>
                          <i className="bx bx-map  home__icon"></i> 
                          Pakistan,Lahore</span>
                      <span className="home__information" title='home__information_email' >
                          <i className="bx bx-envelope home__icon"></i> mian123@gmail.com</span>
                      <span className="home__information" title='home__information_phone'>
                          <i className="bx bx-phone home__icon"></i>+92xxx-xxxxxxx</span>
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