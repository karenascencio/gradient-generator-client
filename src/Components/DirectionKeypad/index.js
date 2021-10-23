import React from 'react'
import { MdNorth, MdSouth, MdNorthWest, MdNorthEast, MdSouthWest, MdSouthEast, MdWest, MdEast, MdPanoramaFishEye } from 'react-icons/md'
// My components
import OptionButton from '../OptionButton'
// Styles
import './style.scss'

export default function DirectionKeypad (props) {
  const { styleState, directionState, buttonHandler } = props
  return (
    <div className='aside__directionkeypad'>
      <h2 className='aside__directiontitle'>
        Direction
      </h2>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdNorthWest />}
          isActive={directionState === 'to bottom right' && 'active'}
          buttonHandler={buttonHandler}
          buttonId='to bottom right'
        />
        <OptionButton
          buttonText={<MdNorth />}
          isActive={directionState === 'to bottom' && 'active'}
          buttonHandler={buttonHandler}
          buttonId='to bottom'
        />
        <OptionButton
          buttonText={<MdNorthEast />}
          isActive={directionState === 'to bottom left' && 'active'}
          buttonHandler={buttonHandler}
          buttonId='to bottom left'
        />
      </div>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdWest />}
          isActive={directionState === 'to right' && 'active'}
          buttonHandler={buttonHandler}
          buttonId='to right'
        />
        {
          styleState === 'radial-gradient' && (
            <OptionButton
              buttonText={<MdPanoramaFishEye />}
              isActive={directionState === 'circle' && 'active'}
              buttonHandler={buttonHandler}
              buttonId='circle'
            />
          )
        }
        <OptionButton
          buttonText={<MdEast />}
          isActive={directionState === 'to left' && 'active'}
          buttonHandler={buttonHandler}
          buttonId='to left'
        />
      </div>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdSouthWest />}
          isActive={directionState === 'to top right' && 'active'}
          buttonHandler={buttonHandler}
          buttonId='to top right'
        />
        <OptionButton
          buttonText={<MdSouth />}
          isActive={directionState === 'to top' && 'active'}
          buttonHandler={buttonHandler}
          buttonId='to top'
        />
        <OptionButton
          buttonText={<MdSouthEast />}
          isActive={directionState === 'to top left' && 'active'}
          buttonHandler={buttonHandler}
          buttonId='to top left'
        />
      </div>
    </div>
  )
}
