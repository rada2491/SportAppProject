import React from 'react';
import {
  Card, CardImg, CardTitle, CardDeck, CardBody, CardText, Button,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom'

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
    //console.log(result)
    this.setState({
      album: result
    })
  }
  render() {


    console.log(this.state)
    //<albumry photos={albumry} />
    return (
      <CardDeck className='SA-CardDeck d-flex justify-content-around'>
        {
          this.state.album.map(album => {
            return (
              <Link key={album.id} to={{ pathname: `/gallery/${album.id}`, state: { photoAlbum: album.photos } }}>
                <Card key={album.id} id={album.id} className='SA-CardDeck__card'>
                  <CardImg top src={album.logo} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{album.name}</CardTitle>
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
/*const PHOTO_SET = [
  
  {
    src: 'http://example.com/example/img1.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://example.com/example/img2.jpg',
    width: 1,
    height: 1
  }
];*/