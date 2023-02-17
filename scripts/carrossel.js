const swiper = new Swiper('.swiper', {
  spaceBetween: 25,
  slidesPerView: 2,

  breakpoints: {
    // when window width is >= 320px
    429: {
      slidesPerView: 3,
      spaceBetween: 60
    },
  },

  centeredSlides:true,
  initialSlide: 2,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});