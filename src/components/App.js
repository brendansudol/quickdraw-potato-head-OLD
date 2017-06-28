import React, { Component } from 'react'

import Face from './Face'
import { makeRandomFace } from '../util'

class App extends Component {
  state = { animate: 1, data: null }

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data/doodles.json`)
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  refresh = () => {
    this.setState({ animate: 0 }, this.animate)
  }

  animate = () => {
    this.setState({ animate: 1 })
  }

  render() {
    const { animate, data } = this.state
    if (!data) return null

    return (
      <div className="p3 container center">
        <div>
          <div className="mb2">
            <button type="button" onClick={this.refresh}>refresh</button>
          </div>
          {animate && <Face data={makeRandomFace(data)} />}
        </div>
      </div>
    )
  }
}

export default App
