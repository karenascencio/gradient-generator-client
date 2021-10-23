import React from 'react'
import { MdNorth, MdSouth, MdNorthWest, MdNorthEast, MdSouthWest, MdSouthEast, MdWest, MdEast, MdPanoramaFishEye } from "react-icons/md"
// My components
import OptionButton from '../OptionButton'
// Styles
import './style.scss'

export default function DirectionKeypad (props) {
  const { radialOff, isActive, buttonHandler } = props
  return (
    <div className='aside__directionkeypad'>
      <h2 className='aside__directiontitle'>
        Direction
      </h2>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdNorthWest />}
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='to bottom right'
        />
        <OptionButton
          buttonText={<MdNorth />}
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='to bottom'
        />
        <OptionButton
          buttonText={<MdNorthEast />}
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='to bottom left'
        />
      </div>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdWest />}
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='to right'
        />
        <OptionButton
          buttonText={<MdPanoramaFishEye />}
          radialOff={radialOff}
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='circle'
        />
        <OptionButton
          buttonText={<MdEast />}
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='to left'
        />
      </div>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdSouthWest />}
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='to top right'
        />
        <OptionButton
          buttonText={<MdSouth />}
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='to top'
        />
        <OptionButton
          buttonText={<MdSouthEast />}
          isActive={isActive}
          buttonHandler={buttonHandler}
          buttonId='to top left'
        />
      </div>
    </div>
  )
}
