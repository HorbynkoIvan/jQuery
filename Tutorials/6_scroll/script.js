window.onscroll = function () {
    var element = document.querySelector('.block');

    function getCoord() {
        var block = element.getBoundingClientRect();
        element.innerHTML = JSON.stringify(block);

        return {
            top: block.top + pageYOffset,
            left: block.left + pageXOffset
        }
    }

    var coord = getCoord();

    if (pageYOffset >= coord.top) {
        console.log("fixed");
        element.style.position = "fixed"
    }
}