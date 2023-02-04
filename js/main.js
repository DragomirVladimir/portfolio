$(function () {

  $('.main-screen').addClass('main-screen--ready');
  $('.nav').addClass('nav--loaded');
  $('.header').addClass('header--loaded');

  $(".menu__link, .logo, .about__link, .main-screen__link").on("click", function (event) {

    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);

  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= $('.about').offset().top - 200) {
      $('.about__skills').addClass('about__skills--focus');
    };


    if ($(window).scrollTop() >= 60) {
      $('.header').addClass('header--scrl');
    }

    else {
      $('.header').removeClass('header--scrl');
    }
  })

  if ($(this).scrollTop() >= $('.about__skills').offset().top - 500) {
    $('.about__skills').addClass('about__skills--focus');
  }

  if ($(window).scrollTop() >= 60) {
    $('.header').addClass('header--scrl');
  }

  else {
    $('.header').removeClass('header--scrl');
  }


  $('.burger-btn').on('click', function () {

    $('.menu').toggleClass('menu--active');

    $('.burger-btn').toggleClass('burger-btn--active');

    $('body').toggleClass('disable-scrloll');

  });


  $('.menu__link, .logo').on('click', function () {

    $('.menu').removeClass('menu--active');

    $('body').removeClass('disable-scrloll');

    $('.burger-btn').removeClass('burger-btn--active');

  });


  $(document).on("click", function (e) {

    $(e.target).closest(".nav").length || ($(".menu").removeClass("menu--active"),

      $(".burger-btn").removeClass("burger-btn--active"),

      $('body').removeClass('disable-scrloll'),

      e.stopPropagation())

  });

  let options = { threshold: [0.4] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animate');
  for (let elm of elements) {
    observer.observe(elm);
  }

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-animate-start');
      }
    });
  }

  if ($('.portfolio').has('element-animate-start')) {
    let portfolioCard = document.querySelectorAll('.portfolio__item');

    for (let i = 0, len = portfolioCard.length; i < len; i++) {
      portfolioCard[i].style.transitionDelay = (i / 4) + 's';
      $('.portfolio__item').addClass('portfolio__item--on-focus')
    }
  }

})