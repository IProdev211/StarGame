////
// show each ship with the ship image and ship's round speed
////

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ShipImg from '../assets/ship.png';
import './StarShip.css'

const StarShip = ()  => {
  // const [ roundSpeed, setRoundSpeed ] = useState([]);
  // availalbe in mobile or tablet
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className='ShipContainer'>
      <div className='RoundSpeed'>
        <p className={isTabletOrMobile ? 'MobileRoundText' : 'RoundText'}>Round 1: ship name - speed</p>
        <p className={isTabletOrMobile ? 'MobileRoundText' : 'RoundText'}>Round 2: ship name - speed</p>
        <p className={isTabletOrMobile ? 'MobileRoundText' : 'RoundText'}>Round 3: ship name - speed</p>
      </div>
      <div className='ShipContainer'>
        <img src={ShipImg} className={isTabletOrMobile ? 'MobileShipImage' : 'ShipImage'} alt='Ship' />
      </div>
    </div>
  )
}


export default StarShip;