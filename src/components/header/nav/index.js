import React from 'react';
import { Link } from 'react-router-dom'
import { Nav } from 'reactstrap';
import './style.scss';

import logo from './logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className="row SA-header">
          <div className="col-md-8">
            <img className='SA-header__logo' src={logo} alt="" />
            <Nav className='SA-header__nav'>
              <li className="SA-header__nav-item">Home</li>
              <li className="SA-header__nav-item">News</li>
              <li className="SA-header__nav-item">Videos</li>
              <li className="SA-header__nav-item">Gallery</li>
              <li className="SA-header__nav-item">About</li>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}
