import React from 'react'

export default function ColorBlock (props) {
  const { colorOne, colorTwo } = props
  return (
    <div
      style={
        {
          backgroundImage: `linear-gradient(to bottom, ${'red'}, blue)`,
          width: '500px',
          height: '500px'
        }
      }
    />
  )
}
