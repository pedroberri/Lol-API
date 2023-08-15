import React from 'react';
import './App.css';
import RandomChampion from './components/RandomChampion';

function App() {

  // const API_KEY = "RGAPI-9c6bf2c1-0fbd-466c-b9f9-795d80f42093"
  // const API_START = "https://br1.api.riotgames.com/"
  // const championsRequest = "http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json"

  return (
    <div className="App">
      <div className='container'>
        <h1>Loldle 2.0</h1>
        <RandomChampion/>
      </div>
    </div>
  );
}

export default App;
