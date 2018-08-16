import React from 'react';
import {
  Card, CardImg, CardTitle, CardDeck, CardBody, Button,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import './style.scss';

const API = 'http://localhost:3000/news/'

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      data: []
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(id) {
    if (typeof id === "number") {
      fetch(API + id)
        .then(res => res.json())
        .then(result => {
          this.setState({
            modal: !this.state.modal,
            data: result
          });
        })
    }
    else {
      this.setState({
        modal: !this.state.modal
      })
    }
  }

  render() {
    const { data } = this.state;
    return (
      <CardDeck className='d-flex justify-content-around SA-CardDeck'>
        {
          this.props.cards.map(cards => (
            <div>
              <Card key={cards.id} id={cards.id} className='SA-CardDeck__card'>
                <CardImg top src={cards.cardImage} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{cards.title}</CardTitle>
                  <Button
                    id='lastIndex'
                    value={cards.id}
                    onClick={() => this.toggle(cards.id)}
                    color="primary" size="sm">
                    Details</Button>
                  <br />
                </CardBody>
              </Card>
            </div>
          ))
        }
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 100 }} backdropTransition={{ timeout: 200 }}
          toggle={this.toggle} className={this.props.className}>
          <CardImg top width="100%" src={data.cardImage} alt="Card image cap" />
          <ModalHeader toggle={this.toggle}>{data.title}</ModalHeader>
          <ModalBody>
            {data.content}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </CardDeck>
    );
  }
};

export default Cards;