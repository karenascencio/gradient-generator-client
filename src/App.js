import React, { useState } from 'react'
// Styles
import './Sass/App.scss'
// Hooks
// My components
import ColorBlock from './Components/ColorBlock'
import DirectionButtons from './Components/DirectionButtons'

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
        <DirectionButtons />
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
