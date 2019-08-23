import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState(null);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


    axios.get('')
      .then(res => {
        const items = response.data;

        console.log(items)
        setCharacter(items)
        console.log('response', res)

      });
  }, []);

  return (
    <div className="item">
      {items.map(item => {
        return (
          <CharacterCard
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species} />
        );
      })}
    </div>
  );
