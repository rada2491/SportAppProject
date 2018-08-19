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
            <div>
              <CardImg top src={item.cardImage} alt="Card image cap"/>
              <Card key={item.id} id={item.id} className=''>
                <CardBody className='SA-Main-New__body'>
                  <CardTitle><h2>{item.title}</h2></CardTitle>
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
