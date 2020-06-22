import React, { useState, useEffect } from 'react';
import StarShip from './components/StarShip';
import { useMediaQuery } from 'react-responsive';
import './App.css';

const STARSHIP_API = 'https://swapi.dev/api/starships/';
const ROUND_COUNT = 3;

function App() {
  const [availableShips, setAvailableShips] = useState([]);
  const [player1Ships, setPlayer1Ships] = useState([]);
  const [player2Ships, setPlayer2Ships] = useState([]);
  const [winner, setWinner] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    async function fetchShips() {
      // fetch available star ships
      let starShips = [];
      let nextUrl = STARSHIP_API;
      
      while (nextUrl) {
        const fetchData = await fetch(nextUrl);
        const jsonData = await fetchData.json();
        starShips = starShips.concat(jsonData.results);
        nextUrl = jsonData.next;
      }
      setAvailableShips(starShips)
    }
    fetchShips();
  }, [])

  useEffect(() => {
    if (availableShips.length > 0) {
      playGame()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableShips])

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const playGame = async () => {
    // main game
    // generate random speeds for each ships
    let round = 0;
    let ship1 = [];
    let ship2 = [];
    setWinner('');
    setResult('');
    const shipsCount = availableShips.length;

    while(round < ROUND_COUNT) {
      while(!ship1[round] || !ship2[round] || !ship1[round].speed || !ship2[round].speed) {
        if (!ship1[round] || !ship1[round].speed) {
          let randomID = parseInt(Math.random() * 100 % shipsCount);
          ship1[round] = {
            name: availableShips[randomID].name,
            speed: parseInt(availableShips[randomID].max_atmosphering_speed)
          }
        }

        if (!ship2[round] || !ship2[round].speed) {
          let randomID = parseInt(Math.random() * 100 % shipsCount);
          ship2[round] = {
            name: availableShips[randomID].name,
            speed: parseInt(availableShips[randomID].max_atmosphering_speed)
          }
        }
      }

      setPlayer1Ships([...ship1]);
      setPlayer2Ships([...ship2]);
      if (round < 2)
        await sleep(500);

      round ++;
    }

    // get the winner of game
    const total1 = ship1.map(s => s.speed).reduce((a, b) => a + b, 0);
    const total2 = ship2.map(s => s.speed).reduce((a, b) => a + b, 0);
    if (total1 > total2) {
      setResult('WINNER')
      setWinner('Luke');
    } else if (total1 === total2) {
      setResult('DRAW')
      setWinner('');
    } else {
      setResult('WINNER')
      setWinner('Han');
    }
  }
    
  // Available in mobile or tablet
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div className="App">
      <div className='firstStarShip'>
        <StarShip ships={player1Ships} player='Luke' />
      </div>
      <div className='resultContainer'>
        <div className={isTabletOrMobile ? 'mobileWinnerContainer' : 'winnerContainer'}>
          <span className={isTabletOrMobile ? 'mobileWinText' : 'winText'}>{result}</span>
          <span className={isTabletOrMobile ? 'mobileWinText' : 'winText'}>{winner}</span>
        </div>
        <div className={isTabletOrMobile ? 'mobileNewGameBtnContainer' : 'newGameBtnContainer'}>
          <button
            className={isTabletOrMobile ? 'mobileNewGameBtn' : 'newGameBtn'}
            onClick = {() => {
              playGame()
            }}
          >
            New Game
          </button>
        </div>
      </div>
      <div className='secondStarShip'>
        <StarShip ships={player2Ships} player='Han' />
      </div>
    </div>
  );
}

export default App;
