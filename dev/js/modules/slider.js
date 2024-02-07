const swiper = new Swiper(".clean__inner .swiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".clean__inner .swiper-button-next",
    prevEl: ".clean__inner .swiper-button-prev",
  },
  spaceBetween: 20,
  autoHeight: true,
});

const servicesSwiper = new Swiper(".services__swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".services-pagination",
  },
});
const aboutSwiper = new Swiper(".about-works__slider", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".about-pagination",
  },
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
const swiperReviewMobile = new Swiper(".swiper.reviews__swiper-mobile", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".reviews-pagination",
  },
});
