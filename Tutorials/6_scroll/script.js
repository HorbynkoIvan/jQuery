window.onscroll = function () {
    function getCoord() {
        var element = document.querySelector('.block');
        var block = element.getBoundingClientRect();
        element.innerHTML = JSON.stringify(block);
        console.log(block);

        return {
            top: block.top + pageYOffset,
            left: block.left + pageXOffset
        }
    }

    getCoord();

}