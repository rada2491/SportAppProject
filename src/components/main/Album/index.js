import React from 'react';
import {
  Card, CardImg, CardTitle, CardDeck, CardBody, CardText, Button,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.scss';

const API = 'http://localhost:3000/album/'

export default class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: []
    }

  }
  async componentDidMount() {
    const response = await fetch(API)
    const result = await response.json()
    this.setState({
      album: result
    })
  }
  render() {
    //<albumry photos={albumry} />
    return (
      <CardDeck className='SA-CardDeck d-flex justify-content-around SA-Album-CardDeck'>
        {
          this.state.album.map(album => {
            return (
              <Link key={album.id} to={{ pathname: `/gallery/${album.id}`, state: { photoAlbum: album.photos } }}>
                <Card key={album.id} id={album.id} className='SA-CardDeck__card'>
                  <CardImg top src={album.logo} alt="Card image cap" />
                  <CardBody>
                    <CardTitle className='SA-Album-CardDeck__card-title'>{album.photos.length} Photos</CardTitle>
                  </CardBody>
                </Card>
              </Link>
            )
          })
        }
      </CardDeck>
    );
  }
}