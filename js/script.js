$(document).ready(function () {
  $("#header, .info").ripples({
    dropRadius: 25,
    perturbance: 0.1,
  });
  /*maginific popup */
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
 });
