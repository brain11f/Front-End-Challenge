'use strict';

function Library(name, index) {
    this.name = name;
    this.index = index;
    this.shelves = [];
};

function Shelf(name, index) {
    this.name = name;
    this.index = index;
    this.booksPerShelf = [];
};

function Book(author, title, index) {
    this.author = author;
    this.title = title;
    this.index = index;
};