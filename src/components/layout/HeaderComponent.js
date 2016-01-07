'use strict';

import React from 'react';

require('styles/layout/Header.scss');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <h1 className="header-title">
          Softwax
        </h1>
      </div>
    );
  }
}

HeaderComponent.displayName = 'LayoutHeaderComponent';

export default HeaderComponent;
