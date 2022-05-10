import React, { Component, Fragment } from 'react'
import Home from '../Home/Home';
import Social from '../Social/Social';
import Profiles from '../Profile/Profiles';
import Educations from '../Education/Education';
import Skills from '../Skills/Skills';
import './Resume.style.css'

export class ResumeLeft extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
        <Fragment>
            <div className="resume__left">
                    <div hidden={false}>
                        {/* <!--========== HOME ==========--> */}
                            <Home/>        
                        
                        {/* <!--========== SOCIAL ==========--> */}
                            <Social/>
    
                        {/* <!--========== PROFILE ==========--> */}
                            <Profiles/>
                        
                        {/* <!--========== EDUCATION ==========--> */}
                            <Educations/>
                        {/* <!--========== SKILLS  ==========--> */}
                            <Skills/>
                      </div>
                    </div>
        </Fragment>
    )
  }
}

export default ResumeLeft