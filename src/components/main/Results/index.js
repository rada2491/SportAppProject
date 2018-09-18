import React from 'react';
import { ListGroupItem } from 'reactstrap';
import './style.scss'


const Result = ({ results }) => {
  return (
    <ListGroupItem className='SA-Results'>
      <div className='d-flex justify-content-center SA-Results__container'>
        <div className="offset-md-1 col-md-1 SA-Results__logo-home">
          <div className="row  SA-Results__home ">
            <img title={results.homeTeamName} src={results.homeTeamLogo} />
          </div>
        </div>
        <div className="col-md-6 SA-Results__scoreboard">
          <h3>{results.result.goalsHomeTeam} - {results.result.goalsAwayTeam}</h3>
        </div>
        <div className="col-md-3 SA-Results__logo-away">
          <div className="row SA-Results__away ">
            <img title={results.awayTeamName} src={results.awayTeamLogo} />
          </div>
        </div>
      </div>
      <div className="col-md-11 SA-Results__status">
        <p>{results.status}</p>
      </div>
    </ListGroupItem>
  )
}

export default Result