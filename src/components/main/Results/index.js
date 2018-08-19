import React from 'react';
import {ListGroupItem } from 'reactstrap';
import './style.scss'


const Result = ({ results }) => {
  return (
    <ListGroupItem>
    <div className='d-flex justify-content-center SA-Results'>
      <div className=" col-md-2">
        <div className="row  SA-Results__home">
          <img src={results.homeTeamLogo} />
        </div>
        <p>{results.homeTeamName}</p>
      </div>
      <div className="col-md-4 SA-Results__scoreboard">
        <h3>{results.result.goalsHomeTeam} - {results.result.goalsAwayTeam}</h3>
      </div>
      <div className="col-md-3">
        <div className="row  SA-Results__away">
          <img src={results.awayTeamLogo} />
        </div>
        <p>{results.awayTeamName}</p>
      </div>
    </div>
    </ListGroupItem>
  )
}

export default Result