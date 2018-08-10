import React, { Component } from 'react';
import LeagueTable from '../../components/main/Table/'

var add = 'http://api.football-data.org/v1/soccerseasons/'
var gg = '/leagueTable'

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
    const { url } = this.props.location.state
    const ref = add + url + gg
    fetch(ref, {
      method: 'GET',
      headers: myHeaders
    })
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
    var id = newProps.location.state.url
    if (id !== this.props.location.state) {
      const ref = add + id + gg
      fetch(ref, {
        method: 'GET',
        headers: myHeaders
      })
        .then(res => res.json())
        .then(date => {
          this.setState({
            isLoaded: true,
            items: date.standing,
          }, () => { this.forceUpdate() })
        });
    }

  }

  render() {
    const { site, items } = this.state;
    return (
      <div>
        <LeagueTable state={this.state.items} />
      </div>
    );
  }
}

export default Details;