import React from 'react'
import './style.scss'

export default function OptionButton (props) {
  const { buttonText, isActive, buttonHandler, buttonId, directionName } = props
  return (
    <button
      id={buttonId}
      className={`main__button ${isActive}`}
      onClick={buttonHandler}
      name={directionName}
    >
      {buttonText}
    </button>
  )
}
