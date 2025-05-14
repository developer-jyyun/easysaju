// 육신 Swiper
const yuksinSwiper = new Swiper(".yuksinSwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  watchOverflow: true,
  navigation: {
    nextEl: ".yuksinSwiper .custom-next",
    prevEl: ".yuksinSwiper .custom-prev",
    disabledClass: "swiper-button-hidden",
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
  watchOverflow: true,
  navigation: {
    nextEl: ".ohaengSwiper .custom-next",
    prevEl: ".ohaengSwiper .custom-prev",
    disabledClass: "swiper-button-hidden",
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
  watchOverflow: true,
  navigation: {
    nextEl: ".gyeokgukSwiper .custom-next",
    prevEl: ".gyeokgukSwiper .custom-prev",
    disabledClass: "swiper-button-hidden",
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
  watchOverflow: true,
  navigation: {
    nextEl: ".basicSwiper .custom-next",
    prevEl: ".basicSwiper .custom-prev",
    disabledClass: "swiper-button-hidden",
  },
  breakpoints: {
    0: { slidesPerView: 1.2 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// 명리잡변 Swiper
const jabbyunSwiper = new Swiper(".jabbyunSwiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  watchOverflow: true,
  navigation: {
    nextEl: ".jabbyunSwiper .custom-next",
    prevEl: ".jabbyunSwiper .custom-prev",
    disabledClass: "swiper-button-hidden",
  },
  breakpoints: {
    0: { slidesPerView: 1.2 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
