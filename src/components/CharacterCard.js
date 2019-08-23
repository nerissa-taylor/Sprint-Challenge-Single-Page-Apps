import React from "react";
import styled from 'styled-components';
const StyledDiv = styled.div`
border: 1px solid black;
`;
export default function CharacterCard(props) {

  return (
    <StyledDiv>
      <span>todo: character</span>
      <h2>Name: {props.name}</h2>
      <p>Status:{props.status}</p>
      <p>Species:{props.species}</p>
    </StyledDiv>

  )
}
