
import React, { Component, Fragment } from 'react'
import './Home.style.css'

export class Home extends Component {
    constructor(props) {
      super(props)
      this.setContentEditable= this.setContentEditable.bind(this);
      this.getOnEditable = this.getOnEditable.bind(this);

      this.state = {
        HomeTitle: "Muhammad Talha",
        elements: ["h1","h3","span"]
      }
    }
      getOnEditable = (e) =>{
        e.preventDefault()
        
      }
      setContentEditable = () =>{
        let getHome = document.getElementById('home');
        this.state.elements.map(el => {
         return getHome.querySelectorAll(`${el}`).forEach(data => data.setAttribute("contentEditable",'true'))
          // getHome.querySelectorAll(`${el}`).forEach(data => data.setAttribute("onInput",this.))
          
        })
      }
    
  render() {
    return (
      <Fragment>
            <section class="home" id="home" >
              <div class="home__container section bd-grid" onClick={this.setContentEditable}>
                  <div class="home__data bd-grid">
                      <img src={""} alt="" class="home__img" hidden/>
                      <h1 class="home__title" title='home__title' onInput={this.getOnEditable}>{this.state.HomeTitle}</h1>
                      <h3 class="home__profession" title='home__profession' onInput={this.getOnEditable}>Full Stack Developer</h3>
                  
                      <div class="block">
                          <a download="" href="assets/pdf/ResumeCv.pdf" class="home__button-movil"> download</a>
                      </div>
                  </div>
                  <div class="home__address bd-grid">
                      <span class="home__information" title='home__information_city' onInput={this.getOnEditable}>
                          <i class="bx bx-map  home__icon"></i> 
                          Pakistan,Lahore</span>
                      <span class="home__information" title='home__information_email' onInput={this.getOnEditable}>
                          <i class="bx bx-envelope home__icon"></i> mian123@gmail.com</span>
                      <span class="home__information" title='home__information_phone' onInput={this.getOnEditable}>
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