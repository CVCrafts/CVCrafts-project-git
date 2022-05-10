import React, { Component, Fragment } from 'react'
import Experience from '../Experience/Experience';
import Certificates from '../Certificates/Certificate';
import References from '../References/References';
import Language from '../Language/Language';
import Interests from '../Interests/Interests';
import './Resume.style.css';


export class ResumeRigth extends Component {
  render() {
    return (
     <Fragment>
          <div className="resume__right">
                      <div hidden={false}>
                        {/* <!--========== EXPERIENCE ==========--> */}
                            <Experience/>    
                        {/* <!--========== CERTIFICATES ==========--> */}
                            <Certificates/>
    
                        {/* <!--========== REFERENCES ==========--> */}
                            <References/>
    
                        {/* <!--========== LANGUAGES ==========--> */}
                            <Language/>
                        
                        {/* <!--========== INTERESTS ==========--> */}
                            <Interests/>
                       </div>
                    </div>
     </Fragment>
    )
  }
}

export default ResumeRigth