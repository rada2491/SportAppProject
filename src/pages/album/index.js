import React, { Component } from 'react';
import Albums from '../../components/main/Album/'
import { Animated } from "react-animated-css";

class Album extends Component {
  render() {
    return (
      <div className="container-fluid cbp-spmenu-push" id='contAlbum'>
        <Animated animationIn="bounceInRight" animationOut="zoomOutDown" isVisible={true}>
          <Albums />
        </Animated>
      </div>
    );
  }
}

export default Album;