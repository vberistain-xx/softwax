'use strict';

import React from 'react';

require('styles/item/ItemCard.scss');

class ItemCardComponent extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log(this.props.item)
  }
  render() {
    return (
      <div className="itemcard-component">
        <div className="img-container">
          <img src={this.props.item.image} alt="dsadsa"/>
        </div>
        <div className="title-container">
          <span className="title">{this.props.item.artist.name}: {this.props.item.title}</span><br/>
          <span className="genre">{this.props.item.genre}</span>
        </div>
        <div className="extra-info-container">
          <span>{this.props.item.reference}:</span><br/>
          <span>{this.props.item.price}&euro;</span>
        </div>
      </div>
    );
  }
}

ItemCardComponent.displayName = 'ItemItemCardComponent';

export default ItemCardComponent;
