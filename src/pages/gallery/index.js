import React, { Component } from 'react';
import PhotoGallery from '../../components/main/Gallery/'

class Gallery extends Component {
  render() {
    return (
      <div className="container-fluid" id='contGallery'>
        <PhotoGallery />
      </div>
    );
  }
}

export default Gallery;