$(function () {
    $('#content').css({
        'color': 'red',
        'margin-left': '20px',
        'font-size': '12px'
    })

    // $('#content').css('height', function (value) {
    //     return parseFloat(value)*2;
    // })

    //add class to element
    $('#content').addClass('name');

    //check for a class
    $('#content').hasClass('name');

    //remove class
    $('#content').removeClass('name');

    //toggle for a class
    $('#content').toggleClass('name');

    //work with attr()
    //find a[href]
    var atr = $('header').find("a").attr('href')
    console.log("attr" + atr)

    var imgTitle = $('img').attr('title', "new image")
    var imgSrc = $('img').attr('src', "/image/png/arrow.png")

    $('#content').find('a').attr({
        "href": 'https://www.youtube.com/watch?v=eFrtW9O7Rtk',
        'title': "work with attr"
    }).text(this.title)

});