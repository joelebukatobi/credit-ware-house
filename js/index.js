var brandsSwiper = new Swiper('.brands__carousel', {
  slidesPerView: 6,
  spaceBetween: 2,
  // loop: true,
  // loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    clickable: true,
  },
});

let swiper = new Swiper('.testimonies__carousel', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
