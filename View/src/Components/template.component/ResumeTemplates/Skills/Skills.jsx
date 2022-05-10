import React, { Component, Fragment } from 'react'
import '../SL.style.css'


export class Skills extends Component {
  render() {
    return (
      <Fragment>
        <section class="skills section" id="skills">
            <div class="section-title">Skills</div>
            <div class="skills__content bd-grid">
                <ul class="skills__data">
                    <li class="skills__name"><span class="skills__circle"></span> HTML</li>
                    <li class="skills__name"><span class="skills__circle"></span> CSS</li>
                    <li class="skills__name"><span class="skills__circle"></span> JAVASCRIPT</li>
                    <li class="skills__name"><span class="skills__circle"></span> SCSS</li>
                </ul>

                <ul class="skills__data">
                    <li class="skills__name"><span class="skills__circle"></span> REACT JS</li>
                    <li class="skills__name"><span class="skills__circle"></span> NODE JS</li>
                    <li class="skills__name"><span class="skills__circle"></span> MONGO DB</li>
                </ul>
            </div>
        </section>
      </Fragment>
    )
  }
}

export default Skills