import 'babel-polyfill';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { map } from 'ramda';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Animated } from "react-animated-css";
import './scss/animate.css';

/* Font Awesome*/

import Header from './components/header/nav/';
import Aside from './components/main/Aside/';
import Footer from './components/footer/';

/* CSS */
import './scss/main.scss';

/* pages */
import Home from './pages/home/';
import Details from './pages/details/';
import Album from './pages/album/';
import Gallery from './pages/gallery/';

/* Loading Image */
import LoadingImage from './LoadingImage.png';

/* Action creator */

import getAllLeagues from './redux/actionCreatos/aside';

class App extends Component {

  static defaultProps = {
    items: [],
    isLoaded: false, //must be false by default
    getAllLeagues: () => { }
  }

  async componentDidMount() {
    this.props.getAllLeagues()
  }

  newLinkAside = aside => <Aside key={aside.id} items={aside} />

  render() {
    const { isLoaded, items } = this.props;
    //{map(this.newLinkAside, items)}
    if (this.props.isLoaded) {
      return (
        <BrowserRouter>
          <Animated animationIn="bounceInRight" animationOut="zoomOutDown" isVisible={true}>
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
                        {map(this.newLinkAside, items)}
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
          </Animated>
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
  items: state.aside.leagues,
  isLoaded: state.aside.isLoaded
})

const mapDispatchToProps = {
  getAllLeagues
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
