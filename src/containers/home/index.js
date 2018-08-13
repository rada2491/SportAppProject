import React, { Component } from 'react';
import Carousel from '../../components/main/Carousel/';
import Card from '../../components/main/Cards/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('../../../database/news.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          isLoaded: true,
          items: data.news,
        })
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div className='container-fluid cbp-spmenu-push' id='contHome'>
        <div>
          <Carousel />
          <Card cards={this.state.items} />
        </div>
      </div>
    )
  }
}

export default Home;