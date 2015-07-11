'use strict';

Shelf.prototype.addBook = function(author, title, index) {
  var bookIndex = this.booksPerShelf.length;
  var newBook = new Book(author, title, bookIndex);
  this.booksPerShelf.push(newBook);
};

Shelf.prototype.removeBook = function(index) {
  this.booksPerShelf.splice(index, 1);
};