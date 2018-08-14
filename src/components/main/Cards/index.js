import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardDeck, CardBody, Button
} from 'reactstrap';

import './style.scss';

const Cards = ({ cards }) => {
  
  return (
    <CardDeck className='d-flex justify-content-around'>
      {
        cards.map(cards => (
          <Card key={cards.id}>
            <CardImg top width="100%" src={cards.cardImage} alt="Card image cap" />
            <CardBody>
              <CardTitle>{cards.title}</CardTitle>
              <Button color="primary" size="sm">Small Button</Button>{' '}
              <br />
            </CardBody>
          </Card>
        ))
      }
    </CardDeck>
  );
};

export default Cards;
