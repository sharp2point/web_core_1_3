import { initSwiper, switchSwiper } from "./swiper_init.js";

let swiperEl = document.querySelector(".services__brands");
let swiper_wrappEl = document.querySelector(".brands__wrapper");
let swiper_slides = document.querySelectorAll(".brands__item");
let swiper_paginator = document.querySelector(".swiper-pagination");

const MOBILE_WIDTH = 500;

let swiper = initSwiper();

function mobileScreen() {
  return screen.width <= MOBILE_WIDTH ? true : false;
}

document.addEventListener("DOMContentLoaded", () => {
  const is_mobile = mobileScreen();
  switchSwiper(
    swiperEl,
    swiper_wrappEl,
    swiper_slides,
    swiper_paginator,
    is_mobile
  );
  swiper();  
});
window.addEventListener("resize", () => {
  const is_mobile = mobileScreen();
  switchSwiper(
    swiperEl,
    swiper_wrappEl,
    swiper_slides,
    swiper_paginator,
    is_mobile
  );
  swiper();
});
