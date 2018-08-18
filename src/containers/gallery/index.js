import React, { Component } from 'react';
import LeagueGallery from '../../components/main/Gallery/'

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount(){
    const { photoAlbum } = this.props.location.state;
    this.setState({
      photos: photoAlbum
    })
  }
  
  render() {
    const { photos } = this.state
    return (
      <div className='cbp-spmenu-push' id='contGallery'>
        <LeagueGallery album={this.state.photos}/>
      </div>
    );
  }
}



export default Gallery;