'use strict';

var counter = 0;

/* add function */
var addNewTodo = function(){
    var inputValue = $('.add').val();
    var list = $('.list ul');
    var newItem = $('<li>' + '<input type="checkbox" id="' + (++counter) + '">' + '<label for="' + counter + '">' + inputValue + '</label>' + '<a class="edit">Edit</a>' + '<a class="delete">Delete</a>' + '</li>');
    list.append(newItem);
	  $('#newTodo').val("");
};

$('#newTodo').keypress(function(event) {
    if (event.which === 13 && $('#newTodo').val().length !== 0) {
        addNewTodo();
    }
});

/* delete button */
$('.list').on('click', '.delete', function(event) {
    event.preventDefault();
    var listItem = $(this).parent();
    listItem.remove();
});

/* edit button */
$('.list').on('click', '.edit', function(event){
    event.preventDefault();
    var listItem = $(this).prev();
    var labelValue = listItem.text();
    var newInput = $('<input type=text class="edition">');
    $(this).toggleClass('changing');
    newInput.insertAfter(listItem);
    newInput.val(labelValue);
    listItem.hide();

    var editTodo = function() {
        var newishItem = newInput.val();
        listItem.text(newishItem);
        newInput.remove();
        listItem.show();
    };

    $('.edition').keypress(function(event) {
        if (event.which === 13 && $('.edition').val().length !== 0) {
            editTodo();
        }
    });

});