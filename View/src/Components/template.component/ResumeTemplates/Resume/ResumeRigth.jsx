import React, { Component, Fragment } from 'react'
import Experience from '../Experience/Experience';
import Certificates from '../Certificates/Certificate';
import References from '../References/References';
import Language from '../Language/Language';
import Interests from '../Interests/Interests';
// import './Resume.style.css';


export class ResumeRigth extends Component {
  constructor(props){
    super(props);
    this.state={
      rightState:[
        <Experience/>,
        <Certificates/>,
        <References/>,
        <Language/>,
        <Interests/>
      ]
    }
  }
  render() {
    const {rightState} = this.state;
    return (
     <Fragment>
          <div className="resume__right">
            { 
              rightState
              .map((elements,index) =>{
                return elements
              })
              
            }
          </div>
     </Fragment>
    )
  }
}

export default ResumeRigth