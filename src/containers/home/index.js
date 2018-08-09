import React, { Component } from 'react';
import Carousel from '../../components/main/Carousel/';
import Aside from '../../components/main/Aside/';
import Card from '../../components/main/Cards/';

class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <Carousel />
          <Card />
        </div>
      </div>
    )
  }
}

export default Home;