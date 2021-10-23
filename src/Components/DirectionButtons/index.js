import React from 'react'
// My components
import OptionButton from '../OptionButton'
// Styles
import './style.scss'

export default function DirectionButtons () {
  return (
    <div className='aside__directionkeypad'>
      <h2 className='aside__directiontitle'>
        Direction
      </h2>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText=''
        />
        <OptionButton
          buttonText='↑'
        />
        <OptionButton
          buttonText=''
        />
      </div>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText='←'
        />
        <OptionButton
          buttonText=''
        />
        <OptionButton
          buttonText='→'
        />
      </div>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText=''
        />
        <OptionButton
          buttonText='↓'
        />
        <OptionButton
          buttonText=''
        />
      </div>
    </div>
  )
}
