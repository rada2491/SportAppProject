import React, { Component } from 'react';
import LeagueGallery from '../../components/main/Gallery/'

class GalleryPage extends Component {

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
  //<LeagueGallery album={this.state.photos}/>
  render() {
    const { photos } = this.state
    console.log(photos)
    return (
      <div>
        <LeagueGallery album={this.state.photos}/>
      </div>
    );
  }
}



export default GalleryPage;