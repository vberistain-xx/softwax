require('normalize.css');
require('styles/App.scss');
require('styles/base.scss');

import React from 'react';
import HeaderComponent from './layout/HeaderComponent';
import MenuComponent from './layout/MenuComponent';
import SidebarComponent from './layout/SidebarComponent';
import ContentComponent from './layout/ContentComponent';


export default () => {
  return (
    <div className="container">
      <HeaderComponent />
      <MenuComponent />
      <SidebarComponent />
      <ContentComponent />
    </div>
  )
}
