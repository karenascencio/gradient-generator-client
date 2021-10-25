import React from 'react'
import { MdNorth, MdSouth, MdNorthWest, MdNorthEast, MdSouthWest, MdSouthEast, MdWest, MdEast, MdPanoramaFishEye } from 'react-icons/md'
// My components
import OptionButton from '../OptionButton'
// Styles
import './style.scss'

export default function DirectionKeypad (props) {
  const { styleState, buttonHandler, directionActive } = props
  return (
    <div className='aside__directionkeypad'>
      <h2 className='aside__directiontitle'>
        Direction
      </h2>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdNorthWest />}
          isActive={directionActive === 'north-west' && 'active'}
          buttonHandler={buttonHandler}
          buttonId={styleState === 'linear-gradient' ? 'to bottom right' : 'left top'}
          directionName='north-west'
        />
        <OptionButton
          buttonText={<MdNorth />}
          isActive={directionActive === 'north' && 'active'}
          buttonHandler={buttonHandler}
          buttonId={styleState === 'linear-gradient' ? 'to bottom' : 'center top'}
          directionName='north'
        />
        <OptionButton
          buttonText={<MdNorthEast />}
          isActive={directionActive === 'north-east' && 'active'}
          buttonHandler={buttonHandler}
          buttonId={styleState === 'linear-gradient' ? 'to bottom left' : 'right top'}
          directionName='north-east'
        />
      </div>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdWest />}
          isActive={directionActive === 'west' && 'active'}
          buttonHandler={buttonHandler}
          buttonId={styleState === 'linear-gradient' ? 'to right' : 'left center'}
          directionName='west'
        />
        {
          styleState === '-moz-radial-gradient' && (
            <OptionButton
              buttonText={<MdPanoramaFishEye />}
              isActive={directionActive === 'panorama' && 'active'}
              buttonHandler={buttonHandler}
              buttonId='circle'
              directionName='panorama'
            />
          )
        }
        <OptionButton
          buttonText={<MdEast />}
          isActive={directionActive === 'east' && 'active'}
          buttonHandler={buttonHandler}
          buttonId={styleState === 'linear-gradient' ? 'to left' : 'right center'}
          directionName='east'
        />
      </div>
      <div className='aside__buttonrow'>
        <OptionButton
          buttonText={<MdSouthWest />}
          isActive={directionActive === 'south-west' && 'active'}
          buttonHandler={buttonHandler}
          buttonId={styleState === 'linear-gradient' ? 'to top right' : 'left bottom'}
          directionName='south-west'
        />
        <OptionButton
          buttonText={<MdSouth />}
          isActive={directionActive === 'south' && 'active'}
          buttonHandler={buttonHandler}
          buttonId={styleState === 'linear-gradient' ? 'to top' : 'center bottom'}
          directionName='south'
        />
        <OptionButton
          buttonText={<MdSouthEast />}
          isActive={directionActive === 'south-east' && 'active'}
          buttonHandler={buttonHandler}
          buttonId={styleState === 'linear-gradient' ? 'to top left' : 'right bottom'}
          directionName='south-east'
        />
      </div>
    </div>
  )
}
