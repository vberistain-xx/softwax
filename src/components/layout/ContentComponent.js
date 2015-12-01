'use strict';

import React from 'react';
import ItemListComponent from '../item/ItemListComponent';


require('styles/layout/Content.scss');

class ContentComponent extends React.Component {
  render() {
    return (
      <div className="content-component">
        <ItemListComponent />
      </div>
    );
  }
}

ContentComponent.displayName = 'LayoutContentComponent';

// Uncomment properties you need
// ContentComponent.propTypes = {};
// ContentComponent.defaultProps = {};

export default ContentComponent;
