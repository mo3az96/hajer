$(document).ready(function () {
  sal({
    once: false,
  });

  if ($(window).width() <= 991) {
    $("*").removeAttr("data-sal");
  }
  
  new bootstrap.ScrollSpy(document.body, {
    target: "#fixedNavbar",
  });
  $("#fixedNavbar ul li a[href^='#'], ul.footer-nav li a[href^='#']").on(
    "click",
    function (e) {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        500,
        function () {
          window.location.hash = hash;
        }
      );
      if ($(window).width() <= 767) {
        $(".navbar").fadeOut(300);
        $(".overlay").fadeOut(300);
        $(".nav").removeClass("active");
        $("body").removeClass("overflow");
      }
    }
  );

  $(".menu-btn").on("click", function (e) {
    $(".navbar").fadeIn(300);
    $(".overlay").fadeIn(300);
    $(".nav").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-btn,.overlay").on("click", function (e) {
    $(".navbar").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".nav").removeClass("active");
    $("body").removeClass("overflow");
  });
  /***** main slider *****/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    centeredSlides: true,
    effect: "fade",
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });
  /***** goals slider *****/
  var goalsSwiper = new Swiper(".goals-slider .swiper", {
    pagination: {
      el: ".goals-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
        loop: true,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
        loop: false,
      },
    },
  });
  /***** services slider *****/
  var servicesSwiper = new Swiper(".services-slider .swiper", {
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 14,
        loop: true,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 14,
        loop: true,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 14,
        loop: true,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 14,
        loop: true,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 14,
        loop: false,
      },
    },
  });

  var prevScroll = $(window).scrollTop();

  $(this).scrollTop() >= 250
    ? $("header").addClass("header-scroll")
    : $("header").removeClass("header-scroll fixsedt");
  $(window).scroll(function () {
    $(this).scrollTop() >= 250
      ? $("header").addClass("header-scroll")
      : $("header").removeClass("header-scroll fixsedt");

    var currentScroll = $(window).scrollTop();
    prevScroll < currentScroll && prevScroll > 0
      ? $("header").removeClass("fixsedt")
      : $("header").addClass("fixsedt"),
      (prevScroll = currentScroll);
  });
});
