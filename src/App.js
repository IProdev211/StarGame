import React from 'react';
import './App.css';
import StarShip from './components/StarShip';
import { useMediaQuery } from 'react-responsive';

function App() {
  // Available in mobile or tablet
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="App">
      <div className='firstStarShip'>
        <StarShip />
      </div>
      <div className='resultContainer'>
        <span className={isTabletOrMobile ? 'mobileWinText' : 'winText'}>WINNER</span>
        <span className={isTabletOrMobile ? 'mobileWinText' : 'winText'}>Luke</span>
        <div className={isTabletOrMobile ? 'mobileNewGameBtnContainer' : 'newGameBtnContainer'}>
          <button className={isTabletOrMobile ? 'mobileNewGameBtn' : 'newGameBtn'}>New Game</button>
        </div>
      </div>
      <div className='secondStarShip'>
        <StarShip />
      </div>
    </div>
  );
}

export default App;
