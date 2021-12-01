var cardSlider = new Swiper(".card-slider", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 3,
  spaceBetween: 40,
  breakpoints: {
    // when window is <= 767px
    767: {
      slidesPerView: 1
    },
    // when window is <= 991px
    991: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});
