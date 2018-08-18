import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import LeagueGallery from '../../components/main/Gallery/'

class GalleryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    const { photoAlbum } = this.props.location.state;
    this.setState({
      photos: photoAlbum
    })
  }
  //<LeagueGallery album={this.state.photos}/>
  render() {
    const { photos } = this.state
    return (
      <div>
        <Animated animationIn="rotateIn" animationOut="slideOutUp" isVisible={true}>
          <LeagueGallery album={this.state.photos} />
        </Animated>
      </div>
    );
  }
}



export default GalleryPage;