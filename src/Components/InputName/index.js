import React from 'react'
// Styles
import './style.scss'

export default function InputName (props) {
  const { inputId, labelText, inputName, inputPlaceholder } = props
  return (
    <div className='aside__inputcontainer'>
      <label
        className='aside__inputlabel'
        htmlFor={inputId}
      >
        {labelText}
      </label>
      <input
        className='aside__inputbox'
        type='text'
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
      />
    </div>
  )
}
