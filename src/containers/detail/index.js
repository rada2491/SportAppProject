import React, { Component } from 'react';
import LeagueTable from '../../components/main/Table/'

var API = 'http://api.football-data.org/v1/soccerseasons/'
var APIEND = '/leagueTable'

var API2 = 'http://localhost:3000/soccerseasons/'

var myHeaders = new Headers({
  'Content-Type': 'application/json',
  'X-Auth-Token': '176d0f15e52c4479976af3e3a372afcb'
});
class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      site: ''
    }
  }

  componentDidMount() {
    //const { url } = this.props.location.state
    const url = this.props.url
    const ref = API + url + APIEND
    //const ref = API2 + url
    fetch(ref, {
      method: 'GET',
      headers: myHeaders
    })
    //fetch(ref)
      .then(res => res.json())
      .then(date => {
        this.setState({
          isLoaded: true,
          items: date.standing,
          site: ref
        })
      });
  }

  componentWillReceiveProps(newProps) {
    var id = newProps.url
    if (id !== this.props) {
      const ref = API + id + APIEND
      //const ref = API2 + id
      fetch(ref, {
        method: 'GET',
        headers: myHeaders
      })
      //fetch(ref)
        .then(res => res.json())
        .then(date => {
          this.setState({
            isLoaded: true,
            items: date.standing,
          })
        });
    }
  }

  render() {
    const { site, items } = this.state;
    return (
      <div className='cbp-spmenu-push' id='contDetail'>
        <LeagueTable state={this.state.items} />
      </div>
    );
  }
}

export default Details;