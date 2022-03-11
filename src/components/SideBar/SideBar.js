/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './SideBar.scss';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';

const navLinks = [
  { url: '/models', name: 'MODELS' },
  { url: '/life_style', name: 'LIFE STYLE' },
  { url: '/shop', name: 'SHOP' },
  { url: '/test_drive', name: 'TEST DRIVE' },
];

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      style: 'menu',
      menuStatus: 'open',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.menuStatus === 'open') {
      this.setState({
        menuStatus: 'close',
        style: 'menu active',
      });
    } else if (this.state.menuStatus === 'close') {
      this.setState({
        menuStatus: 'open',
        style: 'menu',
      });
    }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>menu</button>
        <div className={this.state.style}>
          <div className="logo">Logo</div>
          <ul>
            {navLinks.map(({ url, name }) => (
              <li key={name}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
          <div className="footer">
            <div className="social">
              <FaTwitter />
              <FaFacebookF />
              <TiSocialGooglePlus />
              <FaVine />
              <FaPinterestP />
            </div>
            <small>&copy; 2022 BOOK AN APPOINTMENT</small>
          </div>
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {

};

export default SideBar;
