// 육신 Swiper
const yuksinSwiper = new Swiper(".yuksinSwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: ".yuksinSwiper .swiper-button-next",
    prevEl: ".yuksinSwiper .swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1.2 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
});

// 오행 Swiper
const ohaengSwiper = new Swiper(".ohaengSwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: ".ohaengSwiper .swiper-button-next",
    prevEl: ".ohaengSwiper .swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1.2 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
});

// 격국 Swiper
const gyeokgukSwiper = new Swiper(".gyeokgukSwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: ".gyeokgukSwiper .swiper-button-next",
    prevEl: ".gyeokgukSwiper .swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1.2 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
});
// 명리기초 Swiper
const basicSwiper = new Swiper(".basicSwiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: ".basicSwiper .swiper-button-next",
    prevEl: ".basicSwiper .swiper-button-prev",
  },
});
// 명리잡변 Swiper
const jabbyunSwiper = new Swiper(".jabbyunSwiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: ".jabbyunSwiper .swiper-button-next",
    prevEl: ".jabbyunSwiper .swiper-button-prev",
  },
});
