import React from "react";

export default function CharacterCard(props) {

  return (
    <div>
      <span>todo: character</span>
      <h2>Name: {props.name}</h2>
      <p>Status:{props.status}</p>
      <p>Species:{props.species}</p>
    </div>

  )
}
