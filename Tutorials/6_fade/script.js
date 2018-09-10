$(function () {
    var kvadr = $('.kvadrat');
  /*  kvadr.on('click', function () {
        $(this).fadeTo('slow', .3)
    }); */
    kvadr.on('click', function () {

        $(this).animate({
            'opacity': "0.3",
            'width': "100px",
            height: "200px"
        })
    });


    // fadeIn();
    // fadeOut();
    // fadeTo();
    // fadeToggle();

    //animate
});