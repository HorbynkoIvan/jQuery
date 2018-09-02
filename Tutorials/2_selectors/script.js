$(function () {
    // $(".wrapper").css('color', 'red')
    // $('article h2').css('color', 'red')
    // equal to
    // $('article').find('h2').css('color', 'red')

    // all p which are after h2
    // $('h2 + p').css('color', 'red')
    //
    // select privious element
    // $('#content').prev().css('color', 'red')

    // select next element
    // $('#content').next().css('color', 'red')

    // chose all element
    //$('*').css('color', 'red')

    // chose all element which are the child of
    $('article > *').css('color', 'red')
})