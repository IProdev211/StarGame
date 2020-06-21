import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ShipImg from '../assets/ship.png';
import './StarShip.css'

const StarShip = ()  => {
  const [ roundSpeed, setRoundSpeed ] = useState([]);
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