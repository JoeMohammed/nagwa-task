//__________________________________________________________ Start jquery
$(document).ready(function () {
  "use strict";

  // ___________ Window Functions ___________ //
  $(window).click(function (e) {
    $('.popup').fadeOut();
    $('html, body').animate({
      overflow: 'auto',
    });
  });
  // ___________ Window Functions ___________ //

  // ___________ Popup Functions ___________ //
  $('.YOUR_CLASS').addClick(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.popup').fadeIn().addClass('flex');
    $('html, body').animate({
      overflow: 'hidden',
    });
  });
  $('.popup_close').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.popup').fadeOut();
    $('html, body').animate({
      overflow: 'auto',
    });
  });
  $('.popup_container').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
  });
  // ___________ Popup Functions ___________ //

 

  // ________________________________ start animation ________________________________ //
  if ($(window).width() >= 991) {
    // Helper function for add element box list in WOW
    WOW.prototype.addBox = function (element) {
      this.boxes.push(element);
    };

    // Init WOW.js and get instance
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null, // optional scroll container selector, otherwise use window
    });
    wow.init();

    // Attach scrollSpy to .wow elements for detect view exit events,
    // then reset elements and add again for animation
    // $('.wow').on('scrollSpy:exit', function () {
    //     $(this).css({
    //         'visibility': 'hidden',
    //         'animation-name': 'none'
    //     }).removeClass('animated');
    //     wow.addBox(this);
    // }).scrollSpy();
  }
  // ________________________________ end animation ________________________________ //
});
//__________________________________________________________ end jquery

// google maps
/*
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 26.820553, lng: 30.802498 },
    zoom: 8,
  });
}
*/
