import React from 'react'
import { animateStyles, getStrokeData } from '../util'

const Drawing = ({ color = '#000', data, size = 100, stroke = 6 }) => {
  const { name, details, scale } = data
  const { lenTotal, strokes } = getStrokeData(details.drawing)
  const css = animateStyles(lenTotal)

  return (
    <div className="mb2">
      <div>{name}</div>
      <svg
        className="align-bottom"
        width={size * scale}
        height={size * scale}
        viewBox="0 0 300 300"
        preserveAspectRatio="none"
      >
        <g transform="translate(22, 22)">
          {strokes.map((s, i) => (
            <path
              key={i}
              d={s.d}
              fill="none"
              stroke={color}
              strokeWidth={stroke / scale}
              style={css(i, s.len, s.lenPre)}
              // vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

export default Drawing
