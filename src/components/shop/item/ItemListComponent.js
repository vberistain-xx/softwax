'use strict';

import React from 'react';
import ItemActions from '../../../actions/ItemActions';
import ItemStore from '../../../stores/ItemStore';

import ItemCardComponent from './ItemCardComponent';

import '../../../styles/item/ItemList.scss';

import _ from 'lodash';

class ItemListComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      items: []
    };
    _.bindAll(this, 'onChange');
  }

  componentDidMount() {
    ItemStore.listen(this.onChange);
    ItemActions.getAll();
  }

  componentWillUnmount() {
    ItemStore.unlisten(this.onChange);
  }

  onChange(state){
    this.setState(state);
  }

  render() {
    var items = this.state.items.map((item, i) => {
      return (
        <ItemCardComponent key={i} item={item} />
      );
    });
    return (
      <div>
        {items}
      </div>
    )
  }
}

ItemListComponent.displayName = 'ItemListComponent';

export default ItemListComponent;
