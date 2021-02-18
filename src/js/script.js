$(function () {
  $('.buttonUp').on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });

  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    $('.headerMob__commonBlock').slideToggle().toggleClass('d-block');
  });

  // OWL
  const sliderBtn = [
    '<span class="icon-slider inverse"></span>',
    '<span class="icon-slider"></span>',
  ];

  $('.about__slider-inner').owlCarousel({
    items: 1,
    margin: 30,
    smartSpeed: 1000,
    mouseDrag: false,
    dots: false,
    nav: true,
    navText: sliderBtn,
  });

  $('.partnersSlider').owlCarousel({
    margin: 20,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: sliderBtn,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  $('.cards').owlCarousel({
    margin: 30,
    smartSpeed: 1000,
    nav: true,
    navText: sliderBtn,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });

  $('.page-slider').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    smartSpeed: 1000,
    nav: true,
    navText: sliderBtn,
    margin: 70,
  });

  //  INPUTMASK
  $('#feedback_form input[name="phone"]').inputmask('+\\9\\98 (99) 999 99 99');

  // PARALLAX
  const scene = $('#scene').get(0);
  if (scene) {
    const parallaxInstance = new Parallax(scene);
  }

  const pageNewsTab = $('.page-news__tab');
  pageNewsTab.on('click', function (e) {
    e.preventDefault();
    pageNewsTab.removeClass('page-news__tab--active');
    $(this).addClass('page-news__tab--active');

    let data = $(this).attr('data-tab');
    $('.page-news__content').addClass('page-news__content--disabled');
    $(`#${data}`).removeClass('page-news__content--disabled');
  });
});

// AOS
AOS.init({
  startEvent: 'DOMContentLoaded',
  once: true,
});

//SCROLLMAGIC
function splitScroll() {
  const investorsTitle = document.querySelector('.page-investors__title');
  if (investorsTitle) {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      duration: 580,
      triggerElement: '.breadcrumbs',
      triggerHook: 0,
    })
      .setPin('.fix-title')
      .addTo(controller);
  }
}
if (window.innerWidth > 992) {
  splitScroll();
}
