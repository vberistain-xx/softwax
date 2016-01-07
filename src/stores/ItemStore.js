var alt = require('../alt');
var ItemActions = require('../actions/ItemActions');

import $ from 'jquery';

class ItemStore {
  constructor() {
    this.items = [];
    this.bindListeners({
      getAll: ItemActions.GET_ALL
    });
  }
  getAll() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/items.json',
      success: (res) => {
        this.items = res;
        this.emitChange();
      },
      error: (res) => {
        console.log('Error', res);
      }
    });
  }
}
module.exports = alt.createStore(ItemStore, 'ItemStore');

