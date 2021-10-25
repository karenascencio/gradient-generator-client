import React from 'react'
// Styles
import './style.scss'

export default function ColorBlock (props) {
  const { colorOne, colorTwo, gradientStyle, gradientDirection } = props

  return (
    <div
      className='colorblock'
      style={
        {
          backgroundImage: `${gradientStyle}(${gradientDirection}, ${colorOne}, ${colorTwo})`
        }
      }
    />
  )
}
