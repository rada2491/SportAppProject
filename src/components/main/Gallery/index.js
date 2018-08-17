import React from 'react';
import {
  Card, CardImg, CardTitle, CardDeck, CardBody, CardText, Button,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

const API = 'http://localhost:3000/Gallery/'

export default class AlbumGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }

  }
  async componentDidMount() {
    const response = await fetch(API)
    const result = await response.json()
    //console.log(result)
    this.setState({
      gallery: result
    })
  }
  render() {


    console.log(this.state)
    //<Gallery photos={gallery} />
    return (
      <CardDeck className='SA-CardDeck d-flex justify-content-around'>
        {
          this.state.gallery.map(galle => {

            return (
              <Card key={galle.id} id={galle.id} className='SA-CardDeck__card'>
                <CardImg top src={galle.logo} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{galle.name}</CardTitle>
                </CardBody>
              </Card>)

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