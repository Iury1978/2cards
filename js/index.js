const swiperNew = new Swiper(".swiper_new", {
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: ".block-slider__next_new",
    prevEl: ".block-slider__prev_new",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },

    680: {
      slidesPerView: 3,
    },
    820: {
      slidesPerView: 4,
    },
  },
});

const swiperHits = new Swiper(".swiper_hits", {
  slidesPerView: 4,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    680: {
      slidesPerView: 3,
    },
    820: {
      slidesPerView: 4,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".block-slider__next_hits",
    prevEl: ".block-slider__prev_hits",
  },
});
