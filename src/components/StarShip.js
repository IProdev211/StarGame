////
// show each ship with the ship image and ship's round speed
////

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ShipImg from '../assets/ship.png';
import './StarShip.css'

const StarShip = ({ ships, player })  => {

  // availalbe in mobile or tablet
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className='ShipContainer'>
      <div className='RoundSpeed'>
        <p className={isTabletOrMobile ? 'MobileRoundText' : 'RoundText'}>{ships && ships[0] ? `Round 1: ${ships[0].name} - ${ships[0].speed}km` : ''}</p>
        <p className={isTabletOrMobile ? 'MobileRoundText' : 'RoundText'}>{ships && ships[1] ? `Round 2: ${ships[1].name} - ${ships[1].speed}km` : ''}</p>
        <p className={isTabletOrMobile ? 'MobileRoundText' : 'RoundText'}>{ships && ships[2] ? `Round 3: ${ships[2].name} - ${ships[2].speed}km` : ''}</p>
      </div>
      <div className='ShipContainer'>
        <img src={ShipImg} className={isTabletOrMobile ? 'MobileShipImage' : 'ShipImage'} alt='Ship' />
        <p className={isTabletOrMobile ? 'MobileRoundText' : 'RoundText'}>{player}</p>
      </div>
    </div>
  )
}


export default StarShip;