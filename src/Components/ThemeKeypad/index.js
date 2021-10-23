import React from 'react'
//My components
import InputColors from '../InputColors'
import InputName from '../InputName'
// Styles
import './style.scss'

export default function ThemeKeypad () {
  return (
    <div className='aside__themekeypad'>
      <div className='aside__colorsrow'>
        <InputColors
          labelText='Color one'
          inputId='color-one'
          inputName='colorOne'
        />
        <InputColors
          labelText='Color two'
          inputId='color-two'
          inputName='colorTwo'
        />
      </div>
      <div className='aside__namescol'>
        <InputName
          inputId=''
          labelText='Theme name'
          inputName='themeName'
          inputPlaceholder='Add a name to your theme...'
        />
        <InputName
          inputId=''
          labelText='Creator name'
          inputName='creatorName'
          inputPlaceholder='Please, type your name here...'
        />
      </div>
    </div>
  )
}
