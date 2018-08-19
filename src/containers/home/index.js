import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from '../../components/main/Carousel/';
import Card from '../../components/main/Cards/';
import MainNew from '../../components/main/MainCard/';
import { map } from 'ramda';
import { CardDeck } from 'reactstrap';

import getAllNews from '../../redux/actionCreatos/news'


const API = 'http://localhost:3000/news/'

class Home extends Component {

  static defaultProps = {
    items: [],
    isLoaded: false,
    getAllNews: () => { }
  }

  async componentDidMount() {
    this.props.getAllNews()
  }

  newItemCreator = news => <Card key={news.id} news={news} />

  render() {
    const { items } = this.props;
    console.log(items.slice(0,1))
    //<MainNew newItem = { items.slice(0,1)} />
    return (
      <div className='container-fluid cbp-spmenu-push' id='contHome'>
        <div>
          <Carousel />
          
          <CardDeck className='d-flex justify-content-around SA-CardDeck'>
            {map(this.newItemCreator, items)}
          </CardDeck>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.news.news
})

const mapDispatchToProps = {
  getAllNews
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)