import React, { Component } from 'react';
import Carousel from '../../components/main/Carousel/';
import Aside from '../../components/main/Aside/';
import Card from '../../components/main/Cards/';

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
            <div className='container-fluid'>
                <div className="row">
                    <Carousel />
                    <div className="row">
                        <div className="col-md-3">
                            <Aside item={this.state.items} />
                        </div>
                        <div className="offset-md-1 col-md-7">
                            <Card />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Home;