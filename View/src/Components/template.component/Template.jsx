import React, { Component } from 'react'
import TemplateResume from '../../images/ResumeCv_00.png'
import './template.style.css'
import {Link} from 'react-router-dom'
export class Template extends Component {
  render() {
    return (
      <React.Fragment>
      <section className='bg-lightGray'>
          <div className='landingPageContainer pt-18 px-8 pb-24'>
            <div className="flex flex-col lg:items-center">
            <h2 class="text-3xl xl:text-4xl font-extrabold text-strong">Free CVs templates</h2>
            <p class="max-w-full mt-4 leading-relaxed md:text-xl">Choose a template and customize it&nbsp;quickly</p>
            <div class="mt-6 md:mt-7 lg:mt-8 h-[2px] w-[3rem] bg-primaryBlack"></div>
                <div className="mt-8 md:mt-9 lg:mt-10 w-full m-w-[1200px]">
                    <div>
                        <div class="lazy grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-x-8 entered" data-lazy-function="" data-ll-status="entered">
                            <div className="templateContainer relative flex justify-center rounded pb-[145%]">
                              <Link className="templateWrapper w-full absolute rounded " to={"/editor"}> {/*template__fadeOut*/}
                                  <img src={TemplateResume} alt="" srcset={TemplateResume} />
                              </Link>
        
                            </div>

                            <div className="templateContainer relative flex justify-center rounded pb-[145%]">
                            <Link className="templateWrapper w-full absolute rounded " to={"/editor"}> {/*template__fadeOut*/}
                                  <img src={TemplateResume} alt="" srcset={TemplateResume} />
                              </Link>
        
                            </div>

                            <div className="templateContainer relative flex justify-center rounded pb-[145%]">
                            <Link className="templateWrapper w-full absolute rounded " to={"/editor"}> {/*template__fadeOut*/}
                                  <img src={TemplateResume} alt="" srcset={TemplateResume} />
                            </Link>
        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
      </React.Fragment>
    )
  }
}

export default Template

