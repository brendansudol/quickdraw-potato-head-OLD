import React, { Component } from 'react'

import Drawing from './Drawing'
import { sample } from '../util'

const randomFace = data => {
  const parts = ['circle', 'eye', 'eye', 'nose', 'mouth', 'bowtie', 'hat']
  return parts.map(name => ({ name, details: sample(data[name]) }))
}

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

    const faceParts = randomFace(data)

    return (
      <div className="p3 container">
        <div>
          <div className="mb2">
            <button type="button" onClick={this.refresh}>refresh</button>
          </div>
          {animate &&
            faceParts.map((data, i) => <Drawing key={i} data={data} />)}
        </div>
      </div>
    )
  }
}

export default App
