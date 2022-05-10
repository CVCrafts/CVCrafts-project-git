import React, { Component, Fragment } from 'react'
import '../SL.style.css'


export class Language extends Component {
  render() {
    return (
      <Fragment>
        <section class="languages section">
                    <h2 class='section-title'>Language</h2>

                    <div class='languages__container'>
                        <ul class='languages__content bd-grid'>
                        <li class='languages__name'>
                            <span class='languages__circle'></span> Spanish
                        </li>
                        <li class='languages__name'>
                            <span class='languages__circle'></span> Chinese
                        </li>
                        <li class='languages__name'>
                            <span class='languages__circle'></span> Urdu
                        </li>
                        <li class='languages__name'>
                            <span class='languages__circle'></span> English
                        </li>
                        <li class='languages__name'>
                            <span class='languages__circle'></span> Punjabi
                        </li>
                        </ul>
                    </div>
         </section>
      </Fragment>
    )
  }
}

export default Language