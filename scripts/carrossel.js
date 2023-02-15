const swiper = new Swiper('.swiper', {
  spaceBetween: 25,
  slidesPerView: 2,
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