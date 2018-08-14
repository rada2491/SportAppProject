import React, { Component } from 'react';
import Carousel from '../../components/main/Carousel/';
import Card from '../../components/main/Cards/';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const API = 'http://localhost:3000/news'

var cont;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(contenido) {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          isLoaded: true,
          items: data,
          modal: false
        })
      });
  }

  render() {
    const { items, modal, cont } = this.state;
    console.log('hi' + this.state.items)
    return (
      <div className='container-fluid cbp-spmenu-push' id='contHome'>
        <div>
          <Carousel />
          <Card cards={this.state.items}   />
          
        </div>
      </div>
    )
  }
}

export default Home;