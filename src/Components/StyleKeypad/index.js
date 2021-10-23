import React from 'react'
// My components
import OptionButton from '../OptionButton'
// Styles
import './style.scss'

export default function StyleKeypad (props) {
  const { isActive, buttonHandler } = props
  return (
    <div className='aside__stylekeypad'>
      <h2 className='aside__styletitle'>
        Style
      </h2>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText='Linear'
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='linear-gradient'
        />
        <OptionButton
          buttonText='Radial'
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='radial-gradient'
        />
      </div>
    </div>
  )
}
