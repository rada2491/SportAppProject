import React from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardDeck, CardBody
} from 'reactstrap';

import cort from './cort.jpg';
import vidal from './vidal.jpg';
import manU from './manU.png';

const Cards = (props) => {
    return (
        <CardDeck>
            <Card>
                <CardImg top width="100%" src={cort} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Chelsea and Real Madrid agree fee for transfer of goalkeeper Thibaut Courtois</CardTitle>
                    <br />
                    <CardText>Thibaut Courtois is set for a move from Chelsea to Real Madrid pending a medical, after the clubs announced they had agreed to a deal on Wednesday.</CardText>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={vidal} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Barcelona's signing of Arturo Vidal fails to impress as concerns persist</CardTitle>
                    <br />
                    <CardText>Arturo Vidal arrived in Spain on Sunday to pose for photographs for the first time since agreeing to become a Barcelona player.</CardText>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={manU} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Jose Mourinho, Manchester United must move past difficult preseason</CardTitle>
                    <br />
                    <CardText>Manchester United's players left Bayern Munich's Allianz Arena late on Sunday with more urgency than they had shown on the pitch in the team's soporific 1-0 friendly defeat to the German champions.</CardText>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default Cards;
