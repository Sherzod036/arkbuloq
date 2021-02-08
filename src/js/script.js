$(function () {
  $('.buttonUp').on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });

  // OWL
  const partnersBtn = [
    '<span class="icon-slider inverse"></span>',
    '<span class="icon-slider"></span>',
  ];

  $('.partnersSlider').owlCarousel({
    items: 5,
    margin: 18,
    nav: true,
    navText: partnersBtn,
  });

  //  INPUTMASK
  $('#feedback_form input[name="phone"]').inputmask('+\\9\\98 (99) 999 99 99');

  // PARALLAX
  const scene = $('#scene').get(0);
  const parallaxInstance = new Parallax(scene);
});

AOS.init({
  startEvent: 'DOMContentLoaded',
  once: true,
});
