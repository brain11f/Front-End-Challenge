'use strict';

var seattle = new Library('seattle', 0);

var sience = new Shelf('sience', 0);

var awesomeBook = new Book('Bob', 'Awesome Book', 0);

seattle.addShelf(sience);
sience.addBook(awesomeBook);
seattle.removeShelf(0);
sience.removeBook(0);