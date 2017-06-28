import React from 'react'

import Drawing from './Drawing'
import { SIZE } from '../util'

const Face = ({ data, pad = 10 }) => {
  const { circle, eye, nose, mouth } = data
  const side = SIZE + pad * 2

  return (
    <div>
      <svg
        className="align-bottom"
        width={side}
        height={side}
        viewBox={`0 0 ${side} ${side}`}
        preserveAspectRatio="none"
      >
        <g transform={`translate(${pad}, ${pad})`}>
          <Drawing data={circle} />
          <Drawing data={eye} scale={1 / 4} center={[1 / 3, 1 / 3]} />
          <Drawing data={eye} scale={1 / 4} center={[2 / 3, 1 / 3]} />
          <Drawing data={nose} scale={1 / 4} center={[1 / 2, 1 / 2]} />
          <Drawing data={mouth} scale={1 / 3} center={[1 / 2, 5 / 6]} />
        </g>
      </svg>
    </div>
  )
}

export default Face
