import React, { Component } from 'react';
import { connect } from 'react-redux'
import Carousel from '../../components/main/Carousel/';
import Card from '../../components/main/Cards/';
import { map } from 'ramda'
import {CardDeck} from 'reactstrap';

import getAllNews from '../../redux/actionCreatos/news'


const API = 'http://localhost:3000/news/'

class Home extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      getAllNews: () => {}
    }
  }*/

  static defaultProps = {
    items: [],
    isLoaded: false,
    getAllNews: () => { }
  }

  async componentDidMount() {
    /*fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data,
        })
      });*/
    this.props.getAllNews()
  }

  newItemCreator = news => <Card key={news.id} news={news} />

  render() {
    const { items } = this.props;
    console.log(this.props)
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