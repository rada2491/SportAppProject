import React, { Component } from 'react';
import Carousel from '../../components/main/Carousel/';
import Aside from '../../components/main/Aside/';

const API = 'http://api.football-data.org/v1/soccerseasons';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }

    }

    componentDidMount() {
        fetch(API)
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
        return (
            <div>
                <Carousel />
                <Aside item={this.state.items} />

            </div>
        )
    }
}

export default Home;