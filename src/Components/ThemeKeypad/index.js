import React from 'react'
// Dependencies
import { GiPerspectiveDiceSixFacesOne } from 'react-icons/gi'
//My components
import InputColors from '../InputColors'
import InputName from '../InputName'
import OptionButton from '../OptionButton'
// Styles
import './style.scss'

export default function ThemeKeypad (props) {
  const { changeHandler, valueColorOne, valueColorTwo, randomHandler } = props
  return (
    <div className='aside__themekeypad'>
      <h2 className='aside__themetitle'>
        Theme
      </h2>
      <div className='aside__colorsrow'>
        <InputColors
          labelText='Color one'
          inputId='color-one'
          inputName='colorOne'
          changeHandler={changeHandler}
          colorValue={valueColorOne}
        />
        <InputColors
          labelText='Color two'
          inputId='color-two'
          inputName='colorTwo'
          changeHandler={changeHandler}
          colorValue={valueColorTwo}
        />
        <OptionButton
          buttonText={<GiPerspectiveDiceSixFacesOne />}
          buttonHandler={randomHandler}
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
