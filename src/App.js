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
  const [isActive, setIsActive] = useState(false)
  const [firstPickedColor, setFirstPickedColor] = useState('')

  const buttonHandler = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  const changeHandler = event => {
    let color = event.target.value
    setFirstPickedColor(color)
  }

  return (
    <main>
      <div className='aside'>
        <ThemeKeypad
        />
      </div>
      <div>
        <ColorBlock
          colorOne=''
          colorTwo=''
        />
      </div>
    </main>
  )
}

export default App
