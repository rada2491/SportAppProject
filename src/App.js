import 'babel-polyfill'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { map } from 'ramda'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
import Album from './pages/album/'
import Gallery from './pages/gallery/'

/* Loading Image */
import LoadingImage from './LoadingImage.png';

/* Action creator */

import getAllLeagues from './redux/actionCreatos/aside';


const API = 'http://api.football-data.org/v1/soccerseasons';

var myHeaders = new Headers({
  'Content-Type': 'application/json',
  'X-Auth-Token': '176d0f15e52c4479976af3e3a372afcb'
});

class App extends Component {

  static defaultProps = {
    items: [],
    isLoaded: true, //must be in false by default
    getAllLeagues: () => { }
  }

  async componentDidMount() {
    //this.props.getAllLeagues()
  }

  newLinkAside = aside => <Aside key={aside.id} items={aside} />

  render() {
    //const { isLoaded, items } = this.props;
    console.log(this.props.isLoaded)
    //{map(this.newLinkAside, items)}
    if (this.props.isLoaded) {
      return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                  <div>
                    <div className='main'>
                    </div>
                    <nav className='cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left' id='cbp-spmenu-s1'>
                      <h3>International Leagues</h3>

                    </nav>
                  </div>
                </div>
                <div className="offset-md-1 col-md-10">
                  <main>
                    <Route exact path='/' component={Home} />
                    <Route path='/details/:id' component={Details} />
                    <Route path='/albums' component={Album} />
                    <Route path='/gallery/:id' component={Gallery} />
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
          <img className='logo-centered' src={LoadingImage} alt="" />
          <div className="lds-roller centered"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  //items: state.aside.leagues,
  //isLoaded: state.aside.isLoaded
})

const mapDispatchToProps = {
  //getAllLeagues
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
