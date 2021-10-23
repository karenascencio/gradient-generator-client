import React from 'react'
import './style.scss'

export default function OptionButton (props) {
  const { buttonText, isActive, buttonHandler } = props
  return (
    <button
      className={`main__button ${isActive}`}
      onClick={buttonHandler}
    >
      {buttonText}
    </button>
  )
}
