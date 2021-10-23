import React, { useState } from 'react'
// Styles
import './Sass/App.scss'
// Hooks
// My components
import ColorBlock from './Components/ColorBlock'
import StyleKeypad from './Components/StyleKeypad'
import DirectionKeypad from './Components/DirectionKeypad'
import ThemeKeypad from './Components/ThemeKeypad'
import ActionButton from './Components/ActionButton'

function App () {
  const [firstPickedColor, setFirstPickedColor] = useState('pink')
  const [secondPickedColor, setSecondPickedColor] = useState('gray')
  const [gradientDirection, setGradientDirection] = useState('to bottom')
  const [gradientStyle, setGradientStyle] = useState('linear-gradient')

  // const buttonHandler = () => {
  //   isActive ? setIsActive(false) : setIsActive(true)
  // }

  const changeColorHandler = event => {
    const color = event.target.value
    const inputName = (event.target.name)
    inputName === 'colorOne' ? setFirstPickedColor(color) : setSecondPickedColor(color)
  }

  const directionButtonHandler = event => {
    const buttonId = event.target.id
    buttonId && setGradientDirection(buttonId)
  }

  const styleButtonHandler = event => {
    const buttonId = event.target.id
    buttonId && setGradientStyle(buttonId)
  }

  return (
    <main>
      <div className='aside'>
        <div className='aside__scroll'>
          <h1 className='aside__title'>
            Cute<br />
            CSS<br />
            Gradients<br />
            Generator!
          </h1>
          <div className='aside__keypads'>
            <StyleKeypad
              buttonHandler={styleButtonHandler}
              styleState={gradientStyle}
            />
            <DirectionKeypad
              buttonHandler={directionButtonHandler}
              directionState={gradientDirection}
              styleState={gradientStyle}
            />
            <ThemeKeypad
              changeHandler={changeColorHandler}
            />
            <ActionButton
              buttonText='Save theme'
            />
            <ActionButton
              buttonText='Copy CSS to clipboard'
            />
          </div>
        </div>
      </div>
      <div className='colorblock'>
        <ColorBlock
          colorOne={firstPickedColor}
          colorTwo={secondPickedColor}
          gradientStyle={gradientStyle}
          gradientDirection={gradientDirection}
        />
      </div>
    </main>
  )
}

export default App
