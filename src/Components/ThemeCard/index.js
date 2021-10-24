import React from 'react'
// Styles
import './style.scss'

export default function ThemeCard (props) {
  const { key, creatorName, themeName, colorOne, colorTwo, gradientStyle, gradientDirection, buttonText, buttonHandler } = props
  return (
    <div className='aside__themecard'>
      <div
        className='aside__gradient-block'
        style={
          {
            background: `${gradientStyle}(${gradientDirection}, ${colorOne}, ${colorTwo})`
          }
        }
      />
      <p className='aside__themesign'>
        {themeName} by {creatorName}
      </p>
      <button
        data-css={`background: ${gradientStyle}(${gradientDirection}, ${colorOne}, ${colorTwo})`}
        className='aside__themebutton'
        onClick={buttonHandler}
        id={key}
      >
        {buttonText}
      </button>
    </div>
  )
}
