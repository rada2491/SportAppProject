import React from 'react';
import { Link } from 'react-router-dom'
import { Nav } from 'reactstrap';
import './style.scss';

import logo from './logo.png';

export default class Header extends React.Component {

  componentDidMount() {
    var menuLeft = document.getElementById('cbp-spmenu-s1'),
      showLeftPush = document.getElementById('showLeftPushe');
    var home = document.getElementById('contHome');

    showLeftPush.onclick = function () {

      if (!(menuLeft.classList.contains('cbp-spmenu-open'))) {
        //menuLeft.classList.remove('cbp-spmenu-left')
        menuLeft.classList.add('cbp-spmenu-open')
      } else {
        menuLeft.classList.remove('cbp-spmenu-open')
      }

      if (!(home.classList.contains('cbp-spmenu-push-toright'))) {
        home.classList.add('cbp-spmenu-push-toright')
      } else {
        home.classList.remove('cbp-spmenu-push-toright')
      }
    };
  }

  componentDidUpdate() {
    var menuLeft = document.getElementById('cbp-spmenu-s1'),
      showLeftPush = document.getElementById('showLeftPushe');
    var main = document.getElementById('contHome');

    if (menuLeft.classList.contains('cbp-spmenu-open')) {
      menuLeft.classList.remove('cbp-spmenu-open')
    }

    showLeftPush.onclick = function () {

      if (!(menuLeft.classList.contains('cbp-spmenu-open'))) {
        //menuLeft.classList.remove('cbp-spmenu-left')
        menuLeft.classList.add('cbp-spmenu-open')
      } else {
        menuLeft.classList.remove('cbp-spmenu-open')
      }

      if (!(main.classList.contains('cbp-spmenu-push-toright'))) {
        main.classList.add('cbp-spmenu-push-toright')
      } else {
        main.classList.remove('cbp-spmenu-push-toright')
      }
    };
  }

  render() {
    return (
      <header>
        <div className='container-fluid'>
          <div className="row SA-header">
            <div className="container col-md-8">
              <div className="row">
                <div className="col-md-1 col-sm-1 col-xs-1 SA-header__container">
                  <img className='SA-header__container-logo' src={logo} alt="" />
                </div>
                <div className="col-md-9 col-sm-9 col-xs-9">
                  <Nav className='SA-header__nav d-flex justify-content-around'>
                    <li><Link className="SA-header__nav-item" to='/'>Home</Link></li>
                    <li><a className="SA-header__nav-item" id='showLeftPushe' to='#'>Leagues</a></li>
                    <li><a className="SA-header__nav-item">Videos</a></li>
                    <li><a className="SA-header__nav-item">Gallery</a></li>
                    <li><a className="SA-header__nav-item">About</a></li>
                  </Nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
