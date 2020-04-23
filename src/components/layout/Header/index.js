import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/photos">Photo</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
      </header>
    )
  }
}

export default Header;
