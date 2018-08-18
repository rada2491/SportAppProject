import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import HomeContainer from '../../containers/home/';

class Home extends Component {
  render() {
    return (
      <Animated animationIn="bounceInRight" animationOut="slideOutUp" isVisible={true}>
        <HomeContainer />
      </Animated>
    )
  }
}

export default Home;