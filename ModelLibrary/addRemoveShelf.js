'use strict';

Library.prototype.addShelf = function(name) {
  var shelfName = name;
  var shelfIndex = this.shelves.length;
  var shelf = new Shelf(shelfName, shelfIndex);
  this.shelves.push(shelf);
};

Library.prototype.removeShelf = function(index) {
  this.shelves.splice(index, 1);
};