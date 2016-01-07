'use strict';

import React from 'react';
import ItemListComponent from '../shop/item/ItemListComponent';


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

export default ContentComponent;
