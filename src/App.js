import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

/* Font Awesome*/

import Header from './components/header/nav/'
import Aside from './components/main/Aside/'
import Loading from './pro'
import Footer from './components/footer/'

import './scss/main.scss';

/* pages */
import Home from './pages/home/'
import Details from './pages/details/'

/* Loading Image */
import LoadingImage from './LoadingImage.png';


const API = 'http://api.football-data.org/v1/soccerseasons';

var myHeaders = new Headers({
  'Content-Type': 'application/json',
  'X-Auth-Token': '176d0f15e52c4479976af3e3a372afcb'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }

  }

  componentDidMount() {
    fetch(API, {
      method: 'GET',
      headers: myHeaders
    })
      .then(res => res.json())
      .then(data => {
        var finalData = data.slice(0, 13);
        this.setState({
          isLoaded: true,
          items: finalData,
        })
      });
  }

  render() {

    const { isLoaded, items } = this.state;
    if (isLoaded) {
      return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                  <Aside item={this.state.items} />
                </div>
                <div className="offset-md-1 col-md-10">
                  <main>
                    <Route exact path='/' component={Home} />
                    <Route path='/details/:id' component={Details} />
                  </main>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      )
    } else {
      return (
        <div>
          <img className='logo-centered'src={LoadingImage} alt=""/>
          <div className="lds-roller centered"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>

      )
    }

  }
}

export default App;
