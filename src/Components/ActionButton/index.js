import React from 'react'
import './style.scss'

export default function ActionButton (props) {
  const { buttonText, buttonId, buttonHandler } = props
  return (
    <button
      className='main__button--action'
      id={buttonId}
      onClick={buttonHandler}
    >
      {buttonText}
    </button>
  )
}
