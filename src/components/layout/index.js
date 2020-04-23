import React, { Component } from 'react';

import Header from './Header';


class Layout extends Component {
  render() {
    console.log(this.props);
      return (
        <div>
          <Header/>
          <div className="wrapper">
            {this.props.children}
          </div>
        </div>
      );
  }
}

export default Layout
