import React from 'react';
import {
  Card, CardImg, CardTitle, CardBody
} from 'reactstrap';

const mainCard = ({ newItem }) => {
  console.log(newItem)
  return (
    <div>
      <CardImg top src={newItem.cardImage} alt="Card image cap" />
      <Card key={newItem.id} id={newItem.id} className='SA-CardDeck__card'>
        <CardBody>
          <CardTitle>{newItem.title}</CardTitle>
        </CardBody>
      </Card>
    </div>
  )
}

export default mainCard;
