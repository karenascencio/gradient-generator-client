import React from 'react'
import './style.scss'

export default function ActionButton (props) {
  const { buttonText } = props
  return (
    <button className='main__button--action'>
      {buttonText}
    </button>
  )
}
