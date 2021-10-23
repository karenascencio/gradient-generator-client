import React from 'react'
import { MdNorth, MdSouth, MdNorthWest, MdNorthEast, MdSouthWest, MdSouthEast, MdWest, MdEast, MdPanoramaFishEye } from "react-icons/md"
// My components
import OptionButton from '../OptionButton'
// Styles
import './style.scss'

export default function DirectionKeypad (props) {
  const { radialOff } = props
  return (
    <div className='aside__directionkeypad'>
      <h2 className='aside__directiontitle'>
        Direction
      </h2>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdNorthWest />}
        />
        <OptionButton
          buttonText={<MdNorth />}
        />
        <OptionButton
          buttonText={<MdNorthEast />}
        />
      </div>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdWest />}
        />
        <OptionButton
          buttonText={<MdPanoramaFishEye />}
          radialOff={radialOff}
        />
        <OptionButton
          buttonText={<MdEast />}
        />
      </div>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdSouthWest />}
        />
        <OptionButton
          buttonText={<MdSouth />}
        />
        <OptionButton
          buttonText={<MdSouthEast />}
        />
      </div>
    </div>
  )
}
