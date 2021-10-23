import React from 'react'
// My components
import OptionButton from '../OptionButton'
// Styles
import './style.scss'

export default function StyleKeypad (props) {
  const { styleState, buttonHandler } = props
  return (
    <div className='aside__stylekeypad'>
      <h2 className='aside__styletitle'>
        Style
      </h2>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText='Linear'
          isActive={styleState === 'linear-gradient' && 'active'}
          buttonHandler={buttonHandler}
          buttonId='linear-gradient'
        />
        <OptionButton
          buttonText='Radial'
          isActive={styleState === 'radial-gradient' && 'active'}
          buttonHandler={buttonHandler}
          buttonId='radial-gradient'
        />
      </div>
    </div>
  )
}
