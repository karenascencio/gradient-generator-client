import React from 'react'
import './style.scss'

export default function OptionButton (props) {
  const { buttonText, isActive, buttonHandler, radialOff } = props
  return (
    <button
      className={`main__button ${isActive} ${radialOff}`}
      onClick={buttonHandler}
    >
      {buttonText}
    </button>
  )
}
