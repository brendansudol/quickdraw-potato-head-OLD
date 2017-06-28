import { scaleLinear } from 'd3-scale'
import React from 'react'

import { SIZE, getStrokeData } from '../util'

const xy = scaleLinear().range([0, SIZE])

const Drawing = ({ center, data, outline = true, scale = 1, stroke = 4 }) => {
  const { strokes } = getStrokeData(data.drawing)
  const [x, y] = center ? center.map(p => xy(p) - xy(scale / 2)) : [0, 0]

  return (
    <g transform={`translate(${x}, ${y})scale(${scale})`}>
      {outline &&
        <rect
          width={SIZE}
          height={SIZE}
          fill="none"
          stroke="tomato"
          strokeWidth={0.5 / scale}
        />}
      {strokes.map((s, i) => (
        <path
          key={i}
          d={s.d}
          fill="none"
          stroke="#000"
          strokeWidth={stroke / scale}
        />
      ))}
    </g>
  )
}

export default Drawing
