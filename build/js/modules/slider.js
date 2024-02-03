const swiper = new Swiper(".clean__inner .swiper", {
  slidesPerView: "1",
  loop: true,

  navigation: {
    nextEl: ".clean__inner .swiper-button-next",
    prevEl: ".clean__inner .swiper-button-prev",
  },
  spaceBetween: 20,
  autoHeight: true,
});

const swiperReview = new Swiper(".swiper.reviews__swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  roundLengths: true,
  initialSlide: 1,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 115,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    clickable: true,
    nextEl: ".reviews__inner .swiper-button-next",
    prevEl: ".reviews__inner .swiper-button-prev",
  },
});
