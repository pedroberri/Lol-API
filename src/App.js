import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [championList, setChampionList] = useState([]);

  const [randomChampionName, setRandomChampionName] = useState("");
  const [randomChampionImage, setRandomChampionImage] = useState("");
  const [randomChampionTitle, setRandomChampionTitle] = useState("");
  const [randomChampionTags, setRandomChampionTags] = useState([]);

  const API_KEY = "RGAPI-9c6bf2c1-0fbd-466c-b9f9-795d80f42093"
  const API_START = "https://br1.api.riotgames.com/"
  const championsRequest = "http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json"
  const itemsRequest = "http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/item.json"

  useEffect(() => {
    axios.get(championsRequest).then(function (response) {
      const champions = Object.values(response.data.data).map(champion => ({
        name: champion.name,
        title: champion.title,
        tags: champion.tags,
        img: champion.image.full
      }));
      setChampionList(champions);
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

  function getRandomChampion() {
    if (championList.length > 0) {
      const randomIndex = Math.floor(Math.random() * championList.length);
      setRandomChampionName(championList[randomIndex].name);
      setRandomChampionTitle(championList[randomIndex].title);
      setRandomChampionImage(championList[randomIndex].img);
      setRandomChampionTags(championList[randomIndex].tags);
    } else {
      console.log("Champion list is empty.");
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h5>Loldle 2.0</h5>
        <button onClick={getRandomChampion}>Get Random Champion</button>
      </div>
      {randomChampionName !== "" && (
        <>
          <p>Name: {randomChampionName}</p>
          <p>Title: {randomChampionTitle}</p>
          <img src={"http://ddragon.leagueoflegends.com/cdn/13.15.1/img/champion/" + randomChampionImage} />
          <p>Tags:</p>
          {randomChampionTags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
