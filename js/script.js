$(function () {
  'use strict'
  // banner slider
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: false,
    autoplaySpeed: 1000,
    nextArrow: false,
    prevArrow: false,
  });
  // contact slider
  $('.contact1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: false,
    autoplaySpeed: 1000,
    nextArrow: false,
    prevArrow: false,
  });
  // pages slider
  $('.pagespart3sly').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: false,
    autoplaySpeed: 1000,
    nextArrow: false,
    prevArrow: false,
  });
  // pages slider
  $('.pagespart4sly').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: false,
    autoplaySpeed: 1000,
    nextArrow: false,
    prevArrow: false,
  });
  //populer slider
  $('.popular_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: false,
    autoplaySpeed: 1000,
    nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
  });

  // hot day seller slider
  $('.seller').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: true,
    autoplaySpeed: 1000,
    nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
    // vertical:true,
    fade: true,
  });
  // pages part countersly
  $('.countersly').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    dots: false,
    arrow: false,
    autoplaySpeed: 1000,
    nextArrow: false,
    prevArrow: false,
  });
  // counter down
  $('#example').countdown({
    date: '12/24/2022 23:59:59'
  }, function () {
    alert('Merry Christmas!');
  });
  // //count down vandor
  $('#example8').countdown({
    date: '12/24/2022 23:59:59'
  }, function () {
    alert('Merry Christmas!');
  });
  //shopes down vandor
  $('#example81').countdown({
    date: '12/24/2022 23:59:59'
  }, function () {
    alert('Merry Christmas!');
  });

  // Hide button
  $('.extra_larght').click(function () {
    $('.fadeoutc').slideToggle(500);
  })
  $('.slideup').click(function () {
    $('.fadeoutc').slideUp(500);
  })

  // increment decrement handle counter
  $('#handleCounter').handleCounter();

  // zoom_left_slider

  $('.zoom_left_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrow: true,
    autoplaySpeed: 1000,
    nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
  });


  //  Zoom Slider start
  var myCarousel = document.querySelector('#carouselExampleIndicators')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    wrap: false
  });

  // accordion js start
  $(".accordion-content").css("display", "none");


  $(".accordion-title").click(function () {

    $(".accordion-title").not(this).removeClass("open");

    $(".accordion-title").not(this).next().slideUp(300);

    $(this).toggleClass("open");

    $(this).next().slideToggle(300);
  });
  //back to top
  $('.back_to_top').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 500);
  });

  $(window).scroll(function () {
    var scroll2 = $(this).scrollTop();
    if (scroll2 > 0) {
      $('.back_to_top').fadeIn();
    } else {
      $('.back_to_top').fadeOut();
    }
  });

  //manu fix
  var navOff = $('#menu').offset().top;

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navOff) {
      $('#menu').addClass('menu_fix');
    } else {
      $('#menu').removeClass('menu_fix');
    }
  });
  // Counter up js here
  // Counter up js here
  $('.pagecount').counterUp({
    delay: 50,
    time: 500,
  });
  //product slider
  $('.banner_big_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.banner_small_slider',
    speed: 500,
    nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
  });
  $('.banner_small_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.banner_big_slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    speed: 500,
    autoplay: false,
  });
//product bottum top up
$('.ptop').click(function () {
  $('html, body')
});

$(window).scroll(function () {
  var scroll2 = $(this).scrollTop();
  if (scroll2 > 600) {
    $('.ptop').fadeIn();
  } else {
    $('.ptop').fadeOut();
  }
});

});