$(function () {
    // var $myDiv = $('<div class="my">its my div</div>').appendTo("#content")
    var $myDiv = $('<div>its my div</div>').attr({'id': 'myId', 'class': 'myClass'}).appendTo("#content")
    //analog on pure js
    // var myDiv = document.createElement('div');
    // myDiv.id = "myjsId";
    // myDiv.className = "myjsClass";

    //$('p').after('<hr/>')
    //$('h2').before("<hr/>")
    $('p').append("<span>append</span>")

});

//appendTo
//attr