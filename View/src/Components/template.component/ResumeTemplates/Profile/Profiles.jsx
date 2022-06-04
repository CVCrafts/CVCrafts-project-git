import React, { Component, Fragment } from 'react'
import './Profile.style.css'

export class Profiles extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <Fragment>
        <section class="profile section" id="profile">
            <h2 class="section-title">Profile</h2>

            <p class="profile__description">
                It is a description that highlights your skills and expertise and it shows employers what assets you will bring to the role you are applying for.
                It is a description that highlights your skills and expertise and it shows employers what assets you will bring to the role you are applying for.
                It is a description that highlights your skills and expertise and it shows employers what assets you will bring to the role you are applying for.
            </p>
        </section>
      </Fragment>
    )
  }
}

export default Profiles