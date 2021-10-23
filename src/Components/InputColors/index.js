import React from 'react'
// Styles
import './style.scss'

export default function InputColor (props) {
  const { changeHandler, labelText, inputId, inputName, colorValue } = props
  return (
    <div className='aside__inputContainer--color'>
      <label
        className='aside__inputlabel--color'
        htmlFor={inputId}
      >
        {labelText}
      </label>
      <input
        className='aside__inputbox--color'
        type='color'
        onChange={changeHandler}
        name={inputName}
        id={inputId}
        value={colorValue}
      />
    </div>
  )
}
