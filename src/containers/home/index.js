import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'ramda';
import { CardDeck, ListGroup } from 'reactstrap';
import Carousel from '../../components/main/Carousel/';
import Result from '../../components/main/Results/';
import MainNew from '../../components/main/MainCard/';
import Card from '../../components/main/Cards/';
import getAllNews from '../../redux/actionCreatos/news'
import getAllResults from '../../redux/actionCreatos/results'
import './style.scss'

class Home extends Component {

  static defaultProps = {
    items: [],
    res: [],
    isLoaded: false,
    getAllNews: () => { },
    getAllResults: () => { }
  }

  async componentDidMount() {
    this.props.getAllNews()
    this.props.getAllResults()
  }

  newItemCreator = news => <Card key={news.id} news={news} />
  newResultCreator = results => <Result key={results.id} results={results}/>

  render() {
    const { items } = this.props;
    const { res } = this.props;
    //<MainNew newItem = { items.slice(0,1)} />
    return (
      <div className='container-fluid cbp-spmenu-push' id='contHome'>
        <div className='row'>
          <div className="col-md-12">
            <Carousel />
          </div>
        </div>
        <div className="row">
          <div className="col md-8 SA-Main__new">
            <MainNew newItem={items.slice(0, 1)} />
          </div>
          <div className="col-md-3 SA-Main__result">
            <h3>Recently Results</h3>
            <ListGroup>
              {map(this.newResultCreator, res)}
            </ListGroup>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 SA-Main__news">
            <CardDeck className='d-flex justify-content-around SA-CardDeck'>
              {map(this.newItemCreator, items.slice(1))}
            </CardDeck>
          </div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.news.news,
  res: state.results.results
})

const mapDispatchToProps = {
  getAllNews,
  getAllResults
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)