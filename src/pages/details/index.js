import React, { Component } from 'react';
import DetailContainer from '../../containers/detail/'

class Details extends Component {
    render() {
        const { url } = this.props.location.state
        return (
            <DetailContainer url={url} />
        );
    }
}

export default Details;