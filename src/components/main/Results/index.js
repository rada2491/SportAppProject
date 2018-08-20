import React from 'react';
import { ListGroupItem } from 'reactstrap';
import './style.scss'


const Result = ({ results }) => {
  return (
    <ListGroupItem className='SA-Results'>
      <div className='d-flex justify-content-center SA-Results__container'>
        <div className=" col-md-3">
          <div className="row  SA-Results__home">
            <img title={results.homeTeamName} src={results.homeTeamLogo} />
          </div>
        </div>
        <div className="col-md-6 SA-Results__scoreboard">
          <h3>{results.result.goalsHomeTeam} - {results.result.goalsAwayTeam}</h3>
        </div>
        <div className="col-md-3">
          <div className="row  SA-Results__away">
            <img title={results.awayTeamName} src={results.awayTeamLogo} />
          </div>
        </div>
      </div>
      <div className="col-md-12 SA-Results__status">
        <p>{results.status}</p>
      </div>
    </ListGroupItem>
  )
}

export default Result