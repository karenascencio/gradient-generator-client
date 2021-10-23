import React from 'react'

export default function InputColor (props) {
  const { changeHandler } = props
  return (
    <div>
      <label htmlFor='input-color' />
      <input type='color' onChange={changeHandler} name='' id='input-color' />
    </div>
  )
}
