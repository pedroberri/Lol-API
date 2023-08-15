import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

function RandomChampion() {

  const [randomChampionId, setRandomChampionId] = useState("");
  const [completeChampion, setCompleteChampion] = useState({
    name: "",
    partype: "",
    passive: [],
    image: "",
    skins: [],
    spells: [],
    tags: [],
    title: ""
  })

  useEffect(() => {
    axios.get("http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json").then(function (response) {

      // lista de campeoes com atributos settados
      const champions = Object.values(response.data.data).map(champion => ({
        id: champion.id
      }));

      // campeao aleatorio
      const randomIndex = Math.floor(Math.random() * champions.length);
      const randomChampionData = champions[randomIndex];
      setRandomChampionId(randomChampionData);
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

  function getChampionComplete() {

    const link = "http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion/" + randomChampionId.id + ".json"
    // lista melhor
    axios.get(link).then(function (response) {
      console.log(response.data.data);

      const randomChampionComplete = Object.values(response.data.data).map(champion => ({
        name: champion.name,
        partype: champion.partype,
        passive: champion.passive,
        image: champion.image.full,
        skins: champion.skins,
        spells: champion.spells,
        tags: champion.tags,
        title: champion.title
      }));
      setCompleteChampion(randomChampionComplete)

    })
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* desafio 1 */}
        <Card style={{ width: '10rem' }}>
          {/* <Image src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/champion/${completeChampion.img}`} rounded /> */}
          <Button variant="primary" type='submit' onClick={getChampionComplete}>Submit</Button>
        </Card>
      </div>
    </>
  );
}

export default RandomChampion;
