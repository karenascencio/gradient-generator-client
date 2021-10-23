import React, { useState } from 'react'
// Styles
import './Sass/App.scss'
// Dependencies
import { randomHex } from 'randomize-hex'
// My components
import ColorBlock from './Components/ColorBlock'
import StyleKeypad from './Components/StyleKeypad'
import DirectionKeypad from './Components/DirectionKeypad'
import ThemeKeypad from './Components/ThemeKeypad'
import ActionButton from './Components/ActionButton'

function App () {
  const [firstPickedColor, setFirstPickedColor] = useState(randomHex())
  const [secondPickedColor, setSecondPickedColor] = useState(randomHex())
  const [gradientDirection, setGradientDirection] = useState('to bottom')
  const [gradientStyle, setGradientStyle] = useState('linear-gradient')
  const [clipboardText, setClipboardText] = useState('Copy CSS to clipboard')

  const randomHandler = () => {
    setFirstPickedColor(randomHex())
    setSecondPickedColor(randomHex())
  }

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

  const clipboardButtonHandler = () => {
    const gradientCSS = ` background: ${gradientStyle}(${gradientDirection}, ${firstPickedColor}, ${secondPickedColor})`
    console.log(gradientCSS)
    navigator.clipboard.writeText(gradientCSS)
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
              randomHandler={randomHandler}
              changeHandler={changeColorHandler}
              valueColorOne={firstPickedColor}
              valueColorTwo={secondPickedColor}
            />
            <ActionButton
              buttonText='Save theme'
            />
            <ActionButton
              buttonText={clipboardText}
              buttonHandler={clipboardButtonHandler}
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
