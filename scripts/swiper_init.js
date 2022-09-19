import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

function initSwiper() {
  let is_swiper = true;
  return () => {
    if (is_swiper) {
      is_swiper = false;
      return new Swiper(".swiper", {
        direction: "horizontal",

        pagination: {
          el: ".swiper-pagination",
        },
      });
    } else {
      console.log("initSwiper: достаточно одной копии!");
    }
  };
}

function switchSwiper(
  swiperEl,
  swiper_wrappEl,
  swiper_slides,
  swiper_paginator,
  is_switch
) {
  if (is_switch) {
    swiperEl.classList.add("swiper");
    swiper_wrappEl.classList.add("swiper-wrapper");
    swiper_slides.forEach((slide) => slide.classList.add("swiper-slide"));
    swiper_paginator.classList.add("swiper-pagination");
  } else {

    swiperEl.classList.remove("swiper");
    swiper_wrappEl.classList.remove("swiper");
    swiper_slides.forEach((slide) => slide.classList.remove("swiper"));
    swiper_paginator.classList.remove("swiper");
  }
}

export { initSwiper, switchSwiper };
