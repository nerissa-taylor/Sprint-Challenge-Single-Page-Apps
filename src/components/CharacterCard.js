
import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>

    <Icon name='user' />
    Episodes


  </a>
)

const CharacterCard = (props) => (
  <Card
    image={props.image}
    header={props.name}
    meta={props.status}
    description={props.species}
    extra={extra}




  />
)

export default CharacterCard;