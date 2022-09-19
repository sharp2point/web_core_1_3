import WorkerSwiper from "./swiper_init.js";

let system_state = null; // флаг мобильное/полное состояние
let arrow_button = document.querySelector(".content__arrow"); // кнопка со стрелкой
let swiper_host = document.querySelector(".services__brands");
let swiper_wrapp = document.querySelector(".wrapper");
let swiper_slides = document.querySelectorAll(".brands__item");
let swiper_paginator = document.querySelector(".brands__paginator");

const MOBILE_WIDTH = 539;

let wsw = new WorkerSwiper(
  swiper_host,
  swiper_wrapp,
  swiper_slides,
  swiper_paginator
);
let swiper = null;

function mobileScreen() {
  return screen.width <= MOBILE_WIDTH ? true : false;
}

function sizeReaction() {
  let is_mobile = mobileScreen();

  if (is_mobile !== system_state) {
    if (is_mobile) {
      swiper_host.classList.remove("services__brands-large_open");
      arrow_button.classList.add("content__arrow_hide");
      wsw.switchSwiper(is_mobile);
      swiper = wsw.init();
      system_state = is_mobile;
      
    } else {
      arrow_button.classList.remove("content__arrow_hide");
      if (swiper !== null) {
        swiper.destroy(true, true);
      }
      wsw.switchSwiper(is_mobile);
      system_state = is_mobile;
    }
  }
}

document.addEventListener("DOMContentLoaded", sizeReaction);
window.addEventListener("resize", sizeReaction);

//---------------- ARROW BUTTON -----------------//

function toggleArrowButtonReaction(is_open) {
  if (is_open) {
    arrow_button.classList.add("content__arrow_open");
    swiper_host.classList.add("services__brands-large_open");
    arrow_button.innerText = "Скрыть";
  } else {
    arrow_button.classList.remove("content__arrow_open");
    swiper_host.classList.remove("services__brands-large_open");
    arrow_button.innerText = "Показать всё";
  }
}
function arrowButtonController() {
  let is_open = true;

  return () => {
    toggleArrowButtonReaction(is_open);
    is_open = is_open ? false : true;
  };
}
let arrow_botton_controller = arrowButtonController();

arrow_button.addEventListener("click", () => {
  arrow_botton_controller();
});
