$(function () {
    // $('header').find('a').on('click', function (event) {
    //     alert("Hello");
    //     event.preventDefault();
    //     //предовращает срабатывание события на родителе во время всплытия события
    //     event.stopPropagation();
    //     //есть короткая запись для этих двух событий
    //     // return false
    //
    // });
    // $('header').on('click', function (event) {
    //     alert("Hello header");
    // })

    $('#quantity').keyup(function () {
        var value = $(this).val();
        $('#message').text(value);
        return false;
    })

});