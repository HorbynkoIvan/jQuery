$(function () {
    $('h1').on('click', function () {
        $(this).css('color', 'green')
    });

    /*method html() using for html tags*/
    $("#div1").html('<a href="example.html">Link</a><b>hello</b>');
    /*method text() using for text*/
    $("#div2").text('<a href="example.html">Link</a><b>hello</b>');

    $('.btn_start').on('click', function () {
        $('.message')
            .html("Its message")
            .css('color', 'orange')
            .parent()
            .css('background', 'red')
            .width(100)
            .height(50)
    });
    $('.btn_reset').on('click', function () {
        /*use that method to reload page*/
        location.reload();
    })
});