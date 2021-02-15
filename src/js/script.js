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

  //  INPUTMASK
  $('#feedback_form input[name="phone"]').inputmask('+\\9\\98 (99) 999 99 99');

  // PARALLAX
  const scene = $('#scene').get(0);
  if (scene) {
    const parallaxInstance = new Parallax(scene);
  }
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

const scroll = document.getElementById('cards-slider-range');
if (scroll) {
  scroll.oninput = function () {
    let cards = document.getElementById('cards');
    let total = cards.scrollWidth - cards.offsetWidth;
    let percentage = total * (this.value / 100);
    cards.scrollLeft = percentage;
  };
}
