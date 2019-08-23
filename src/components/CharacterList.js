import React, { Fragment, useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        const items = res.data;

        console.log(items)
        setCharacter(items)
        console.log('response', res)

      });
  }, []);

  return (

    {
      character.map((item, index) => <CharacterCard
        item={item}
        key={item.id}
        id={item.id}
        name={item.name}
        status={item.status}
        species={item.species} />

      )
    }
    
}
