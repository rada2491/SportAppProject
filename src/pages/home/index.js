import React, { Component } from 'react';
import Aside from '../../components/main/Aside/';
import HomeContainer from '../../containers/home/';
import DetailsContainer from '../../containers/Details/';

const API = 'http://api.football-data.org/v1/soccerseasons';

var myHeaders = new Headers({
  'Content-Type': 'application/json',
  'X-Auth-Token': '176d0f15e52c4479976af3e3a372afcb'
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }

  }

  componentDidMount() {
    fetch(API, {
      method: 'GET',
      headers: myHeaders
    })
      .then(res => res.json())
      .then(date => {
        this.setState({
          isLoaded: true,
          items: date,
        })
      });
  }

  render() {

    const { isLoaded, items } = this.state;
    if (isLoaded) {
      console.log(items[0]._links.leagueTable.href)
    }

    return (
      <div className='container-fluid'>
        <div className="row">
          {/*<DetailsContainer />*/}
          <div className="col-md-3">
            <Aside item={this.state.items} />
          </div>
            <div className="col-md-8">
              <HomeContainer />
            </div>
        </div>
      </div>
    )
  }
}

export default Home;