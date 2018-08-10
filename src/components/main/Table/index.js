import React from 'react';
import { Table } from 'reactstrap';

const LeagueTable = ({ state }) => {
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
          state.map(state => (
            <tr key={state.position}>
              <td>{state.position}</td>
              <td>{state.teamName}</td>
              <td>{state.points}</td>
              <td>{state.playedGames}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default LeagueTable;