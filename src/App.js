import React, { useState, useEffect } from 'react'
// Styles
import './Sass/App.scss'
// Dependencies
import { randomHex } from 'randomize-hex'
// api
import { getThemes, postTheme } from './lib/api'
// My components
import ColorBlock from './Components/ColorBlock'
import StyleKeypad from './Components/StyleKeypad'
import DirectionKeypad from './Components/DirectionKeypad'
import ThemeKeypad from './Components/ThemeKeypad'
import ActionButton from './Components/ActionButton'
import ThemeCard from './Components/ThemeCard'

function App () {
  const [firstPickedColor, setFirstPickedColor] = useState(randomHex())
  const [secondPickedColor, setSecondPickedColor] = useState(randomHex())
  const [gradientDirection, setGradientDirection] = useState('to bottom')
  const [gradientStyle, setGradientStyle] = useState('linear-gradient')
  const [clipboardText, setClipboardText] = useState('Copy CSS to clipboard')
  const [postButtonMessage, setPostButtonMessage] = useState('Save theme')
  const [themeNames, setThemeNames] = useState({})
  const [communityThemes, setCommunityThemes] = useState([])

  useEffect(async () => {
    const fetchedThemes = await getThemes()
    setCommunityThemes(fetchedThemes)
  }, [])

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

  const textInputHandler = event => {
    const { name, value } = event.target
    setThemeNames({ ...themeNames, [name]: value })
  }

  const addThemeButtonHandler = async () => {
    const themeToPost = {
      ...themeNames,
      colorOne: firstPickedColor,
      colorTwo: secondPickedColor,
      gradientDirection: gradientDirection,
      gradientStyle: gradientStyle
    }
    const postedTheme = await postTheme(themeToPost)
    setPostButtonMessage('Yay! You posted a theme')
    setTimeout(() => setPostButtonMessage('Save theme'), 1500)
    const updatedThemes = await getThemes()
    setCommunityThemes(updatedThemes)
  }

  const clipboardButtonHandler = () => {
    const gradientCSS = ` background: ${gradientStyle}(${gradientDirection}, ${firstPickedColor}, ${secondPickedColor})`
    navigator.clipboard.writeText(gradientCSS)
    setClipboardText('Yay! Capied to clipboard!')
    setTimeout(() => setClipboardText('Copy CSS to clipboard'), 1500)
  }

  const clipboardThemeHandler = event => {
    const gradientCSS = event.target.dataset.css
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
              textInputHandler={textInputHandler}
            />
            <ActionButton
              buttonText={postButtonMessage}
              buttonHandler={addThemeButtonHandler}
            />
            <ActionButton
              buttonText={clipboardText}
              buttonHandler={clipboardButtonHandler}
            />
            <div className='aside__themesgrid'>
              <h2 className='aside__themestitle'>
                Community themes
              </h2>
              <div className='aside__themeswrapper'>
                {
                  communityThemes &&
                    communityThemes.map(theme =>
                      <ThemeCard
                        key={theme._id}
                        themeName={theme.themeName ? theme.themeName : 'untitled'}
                        creatorName={theme.creatorName ? theme.creatorName : 'anon'}
                        colorOne={theme.colorOne}
                        colorTwo={theme.colorTwo}
                        gradientStyle={theme.gradientStyle}
                        gradientDirection={theme.gradientDirection}
                        buttonText='Copy CSS to clipboard'
                        buttonHandler={clipboardThemeHandler}
                      />
                    )
                }
              </div>
            </div>
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
