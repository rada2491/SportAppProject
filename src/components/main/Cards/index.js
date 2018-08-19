import React from 'react';
import {
  Card, CardImg, CardTitle, CardDeck, CardBody, Button,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import './style.scss';
import { newType, newTypeDefault } from '../../../proptypes/index'

const API = 'http://localhost:3000/news/'

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
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
    const { news } = this.props
    return (
      <div>
          <Card key={news.id} id={news.id} className='SA-CardDeck__card'>
            <CardImg top src={news.cardImage} alt="Card image cap" />
            <CardBody>
              <CardTitle>{news.title}</CardTitle>
              <Button
                id='lastIndex'
                value={news.id}
                onClick={() => this.toggle(news.id)}
                color="primary" size="sm">
                Details</Button>
              <br />
            </CardBody>
          </Card>
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
        </div>
    );
  }
};

Cards.propTypes = {
  news: newType
}

Cards.defaultProps = {
  news: newTypeDefault
}

export default Cards;