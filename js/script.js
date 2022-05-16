//__________________________________________________________ Start jquery
$(document).ready(function () {
  "use strict";

  // ___________ Window Functions ___________ //
  $(window).click(function (e) {
    $(".popup").fadeOut();
    $("html, body").animate({
      overflow: "auto",
    });
  });
  // ___________ Window Functions ___________ //

  // ___________ percircle Functions ___________ //
  $("#bluecircle").percircle();
  $("#bluecircle2").percircle();
  $("#bluecircle3").percircle();
  // ___________ percircle Functions ___________ //

  // ___________ Homework Charts Functions ___________ //
  // const DATA_COUNT = 7;
  // const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
  // const labels = Utils.months({ count: 7 });
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    // coun
    data: {
      labels: [
        "19/5",
        "18/4",
        "17/6",
        "20/7",
        "22/7",
        "30/8",
        "30/8",
        "30/8",
        "30/8",
        "30/8",
        "30/8",
        "30/8",
        "30/8",
        "30/8",
        "30/8",
        "30/8",
        "30/8",
      ],
      datasets: [
        {
          label: "Adam",
          data: [
            60, 62, 58, 59, 57, 51, 40, 37, 56, 55, 58, 64, 39, 52, 60, 55, 51,
          ],
          max: 500,
          backgroundColor: ["#E5F0F7"],
          borderColor: ["#0575B6"],
          borderWidth: 1,
          borderRadius: 10,
          borderSkipped: false,
        },
        {
          label: "Average",
          data: [
            55, 65, 51, 62, 45, 55, 49, 47, 51, 58, 57, 60, 49, 42, 50, 59, 57,
          ],
          backgroundColor: ["#E5E5E5"],
          borderColor: ["#333333"],
          borderWidth: 1,
          borderRadius: 10,
          borderSkipped: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          min: 30,
          max: 65,
          labels: "",
        },
      },
    },
  });

  // ___________ Homework Charts Functions ___________ //

  // ___________ Fullcalendar  Functions ___________ //
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
    },
    initialDate: "2020-09-12",
    navLinks: true, // can click day/week names to navigate views
    businessHours: true, // display business hours
    editable: true,
    selectable: true,
    events: [
      {
        title: "Business Lunch",
        start: "2020-09-03T13:00:00",
        constraint: "businessHours",
      },
      {
        title: "Meeting",
        start: "2020-09-13T11:00:00",
        constraint: "availableForMeeting", // defined below
        color: "#257e4a",
      },
      {
        title: "Conference",
        start: "2020-09-18",
        end: "2020-09-20",
      },
      {
        title: "Party",
        start: "2020-09-29T20:00:00",
      },

      // areas where "Meeting" must be dropped
      {
        groupId: "availableForMeeting",
        start: "2020-09-11T10:00:00",
        end: "2020-09-11T16:00:00",
        display: "background",
      },
      {
        groupId: "availableForMeeting",
        start: "2020-09-13T10:00:00",
        end: "2020-09-13T16:00:00",
        display: "background",
      },

      // red areas where no events can be dropped
      {
        start: "2020-09-24",
        end: "2020-09-28",
        overlap: false,
        display: "background",
        color: "#ff9f89",
      },
      {
        start: "2020-09-06",
        end: "2020-09-08",
        overlap: false,
        display: "background",
        color: "#ff9f89",
      },
    ],
  });

  calendar.render();
  // ___________ Fullcalendar  Functions ___________ //

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
