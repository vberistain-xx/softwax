'use strict';

import React from 'react';

require('styles/layout/Menu.scss');

class MenuComponent extends React.Component {
  render() {
    return (
      <div className="menu-component">
        <ul>
          <li className="menu-link"><a href="/">Home</a></li>
          <li className="menu-link"><a href="/">Account</a></li>
          <li className="menu-link"><a href="/">Basket</a></li>
          <li className="menu-link"><a href="/">Shipping</a></li>
          <li className="menu-link"><a href="/">Contact</a></li>
        </ul>
      </div>
    );
  }
}

MenuComponent.displayName = 'LayoutMenuComponent';

export default MenuComponent;
