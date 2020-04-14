import React, { Component } from 'react'
import WithMathjaxDisplayed from './WithMathjaxDisplayed'

class MathjaxViewer extends Component {
  render() {
    const { text } = this.props
    return <p dangerouslySetInnerHTML={{ __html: text }} />
  }
}
export default WithMathjaxDisplayed(MathjaxViewer)