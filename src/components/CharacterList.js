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


        setCharacter(res.data.results)
        console.log(res.data.results)


      });
  }, []);

  return (

    <div>
      {character.map((item, index) => <CharacterCard
        item={item}
        key={index}
        name={item.name}
        status={item.status}
        species={item.species}
        image={item.image} />
      )}
    </div>



  )

}


