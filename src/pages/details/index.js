import React, { Component } from 'react';
import DetailContainer from '../../containers/detail/'
import { Animated } from "react-animated-css";

class Details extends Component {
  render() {
    const { url } = this.props.location.state
    return (
      <Animated animationIn="bounceInRight" animationOut="slideOutUp" isVisible={true}>
        <DetailContainer url={url} />
      </Animated>
    );
  }
}

export default Details;