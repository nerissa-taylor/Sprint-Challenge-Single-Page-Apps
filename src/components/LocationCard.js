
import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    Residents
   
   
  </a>
)

const LocationCard = (props) => (
  <Card
    image=''
    header={props.name}
    meta={props.type}
    description={props.dimension}
    extra={extra}




  />
)

export default LocationCard;