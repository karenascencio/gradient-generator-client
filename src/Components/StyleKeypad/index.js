import React from 'react'
// My components
import OptionButton from '../OptionButton'
// Styles
import './style.scss'

export default function StyleKeypad () {
  return (
    <div className='aside__stylekeypad'>
      <h2 className='aside__styletitle'>
        Style
      </h2>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText='Linear'
        />
        <OptionButton
          buttonText='Radial'
        />
      </div>
    </div>
  )
}
