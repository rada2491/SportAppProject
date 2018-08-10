import React, { Component } from 'react';
import LeagueTable from '../../containers/Details/'

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            site: ''
        }

    }
    componentDidMount() {
        const { url } = this.props.location.state
        this.setState({
            site: url,
        })
        
    }
    render() {
        const { site } = this.state;
        return (
            <div>
                <LeagueTable state={this.state.site} />
            </div>
        );
    }
}

export default Details;