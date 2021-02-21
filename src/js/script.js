$(function () {
  const BODY = $('body');

  // COOKIE
  const preloader = $('.preloader');
  if (!$.cookie('myCookie')) {
    $(window).on('load', () => {
      preloader.removeClass('loaded');
      BODY.removeClass('fixed');
    });
    $.cookie('myCookie', 'true');
  } else {
    preloader.removeClass('loaded');
    BODY.removeClass('fixed');
  }

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

  // TABS
  function tabs(ctx, tab, tabActive, content, contentDisabled) {
    $(tab).removeClass(tabActive);
    ctx.addClass(tabActive);

    let data = ctx.attr('data-tab');
    $(content).addClass(contentDisabled);
    $(`#${data}`).removeClass(contentDisabled);
  }

  $('.page-news__tab').on('click', function (e) {
    e.preventDefault();
    const self = $(this);
    tabs(
      self,
      '.page-news__tab',
      'page-news__tab--active',
      '.page-news__content',
      'page-news__content--disabled'
    );
  });

  $('.page-media__tab').on('click', function (e) {
    e.preventDefault();
    const self = $(this);
    tabs(
      self,
      '.page-media__tab',
      'page-media__tab--active',
      '.page-media__content',
      'page-media__content--disabled'
    );
  });

  $('#photo .page-media__innertab').on('click', function (e) {
    e.preventDefault();
    const self = $(this);
    tabs(
      self,
      '#photo .page-media__innertab',
      'page-media__innertab--active',
      '#photo .page-media__innercontent',
      'page-media__innercontent--disabled'
    );
  });

  $('#video .page-media__innertab').on('click', function (e) {
    e.preventDefault();
    const self = $(this);
    tabs(
      self,
      '#video .page-media__innertab',
      'page-media__innertab--active',
      '#video .page-media__innercontent',
      'page-media__innercontent--disabled'
    );
  });

  // POPUP
  const popupBlock = $('.page-media__popup');
  const popupPic = $('.page-media__popup-pic');

  function popup(ctx) {
    let currentPic = ctx.find('.page-media__photoItem-pic').attr('src');
    popupPic.attr('src', currentPic);
    popupPic.attr('srcset', '');
    BODY.addClass('fixed');
    popupBlock.addClass('page-media__popup--actived');
  }

  $('.page-media__photoItem').on('click', function () {
    const self = $(this);
    popup(self);
  });

  $('.page-media__popup-close').on('click', () => {
    BODY.removeClass('fixed');
    popupBlock.removeClass('page-media__popup--actived');
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
      .setPin('.page-investors__title')
      .addTo(controller);
  }
}
if (window.innerWidth > 992) {
  splitScroll();
}
