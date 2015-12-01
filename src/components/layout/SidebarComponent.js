'use strict';

import React from 'react';

require('styles/layout/Sidebar.scss');

class SidebarComponent extends React.Component {
  render() {
    return (
      <div className="sidebar-component">
        <ul>
          <li>
            <a href="/">New Releases</a>
          </li>
          <li>
            <a href="/">Back in Stock</a>
          </li>
          <li>
            <a href="/">House</a>
          </li>
          <li>
            <a href="/">Techno</a>
          </li>
          <li>
            <a href="/">Minimal</a>
          </li>
          <li>
            <a href="/">Ambient</a>
          </li>
        </ul>
      </div>
    );
  }
}

SidebarComponent.displayName = 'LayoutSidebarComponent';

// Uncomment properties you need
// SidebarComponent.propTypes = {};
// SidebarComponent.defaultProps = {};

export default SidebarComponent;
