import React, { Component } from 'react';
import Albums from '../../components/main/Album/'

class Album extends Component {
  render() {
    return (
      <div className="container-fluid cbp-spmenu-push" id='contAlbum'>
        <Albums />
      </div>
    );
  }
}

export default Album;