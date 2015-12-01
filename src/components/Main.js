require('normalize.css');
require('styles/App.scss');
require('styles/base.scss');

import React from 'react';
import HeaderComponent from './layout/HeaderComponent';
import MenuComponent from './layout/MenuComponent';
import SidebarComponent from './layout/SidebarComponent';
import ContentComponent from './layout/ContentComponent';
// import { Router, Route, Link } from 'react-router';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <MenuComponent />
        <SidebarComponent />
        <ContentComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
