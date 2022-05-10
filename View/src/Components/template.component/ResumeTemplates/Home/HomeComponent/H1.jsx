import axios from 'axios'
import React, { Component } from 'react'

export class H1 extends Component {
    constructor(props) {
      super(props)

    }
  render() {
     
    return (
      <h1 onInput={this.props.onInput} contentEditable={this.props.contentEditable}>
        {this.props.children}
      </h1>
    )
  }
}

export default H1