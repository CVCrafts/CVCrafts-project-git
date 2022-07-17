import React, { Component, Fragment } from 'react'
import '../SL.style.css'


export class Language extends Component {
  render() {
    return (
      <Fragment>
        <section className="languages section">
                    <h2 className='section-title'>Language</h2>

                    <div className='languages__container'>
                        <ul className='languages__content bd-grid'>
                        <li className='languages__name'>
                            <span className='languages__circle'></span> Spanish
                        </li>
                        <li className='languages__name'>
                            <span className='languages__circle'></span> Chinese
                        </li>
                        <li className='languages__name'>
                            <span className='languages__circle'></span> Urdu
                        </li>
                        <li className='languages__name'>
                            <span className='languages__circle'></span> English
                        </li>
                        <li className='languages__name'>
                            <span className='languages__circle'></span> Punjabi
                        </li>
                        </ul>
                    </div>
         </section>
      </Fragment>
    )
  }
}

export default Language