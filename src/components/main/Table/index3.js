import React from 'react';
import { Table } from 'reactstrap';

var myHeaders = new Headers({
  'Content-Type': 'application/json',
  'X-Auth-Token': '176d0f15e52c4479976af3e3a372afcb'
});

export default class leagueTable extends React.Component {

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
    console.log(url)
    fetch(url, {
      method: 'GET',
      headers: myHeaders
    })
      .then(res => res.json())
      .then(date => {
        console.log(date.standing)

        this.setState({
          isLoaded: true,
          items: date.standing,
        })
      });
  }

  componentWillReceiveProps() {
    const { url } = this.props.location.state
    console.log(url)
    fetch(url, {
      method: 'GET',
      headers: myHeaders
    })
      .then(res => res.json())
      .then(date => {
        console.log(date.standing)

        this.setState({
          isLoaded: true,
          items: date.standing,
        })
      });
  }
  render() {
    const { isLoaded, items } = this.state;
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>Position</th>
            <th>Team Name</th>
            <th>Points</th>
            <th>Played Games</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(items => (
              <tr key={items.position}>
                <td>{items.position}</td>
                <td>{items.teamName}</td>
                <td>{items.points}</td>
                <td>{items.playedGames}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
}
