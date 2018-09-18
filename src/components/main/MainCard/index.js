import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';
import './style.scss'

const mainCard = ({ newItem }) => {
  return (
    <div>
      {
        newItem.map(item => {
          return (
            <div key={item.id}>
              <CardImg top src={item.cardImage} alt="Card image cap"/>
              <Card  id={item.id} className=''>
                <CardBody className='SA-Main-New__body'>
                  <CardTitle className='SA-Main-New__title'>{item.title}</CardTitle>
                  <CardText>{item.content}</CardText>
                </CardBody>
              </Card>
            </div>
          )
        })
      }
    </div>
  )
}

export default mainCard;
