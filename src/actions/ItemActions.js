var alt = require('../alt');
 
class ItemActions {
  getAll() {
    this.dispatch();
  }
}

module.exports = alt.createActions(ItemActions);
 