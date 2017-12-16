$(function () {
    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) {
            /* Do Stuff* / }, // A function to be called when sideNav is opened*/
        },
        onClose: function(el) {
            /* Do Stuff* / }, // A function to be called when sideNav is closed*/
        }
    });
    // var scrollspyOptions = [];
    $('.scrollspy').scrollSpy({
        scrollOffset: 10,
        activeClass: 'active',
        callback: function(id) {
            return 'a[href="#' + id + '"]';
        }
    });

    $('.navigation').pushpin({
        top: 100,
        bottom: Infinity,
        offset: 0
    });

    Materialize.scrollFire(
        {selector: '.section', offset: 0, callback: function() {
            $('.start').hide();
        }}
    );
});