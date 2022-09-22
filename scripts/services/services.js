import WorkerSwiper from "./swiper_init.js";
import ServicesArrowButton from "./services_arrow_button.js";
import ServicesBrandPanel from "./services_brand_panel.js";

let system_state = null; // флаг мобильное/полное состояние
let swiper_wrapp = document.querySelector(".wrapper"); // элемент подключения [.swiper-wrapper]
let swiper_slides = document.querySelectorAll(".brands__item"); // список элементов [.swiper-slider]
let swiper_paginator = document.querySelector(".brands__paginator"); // элемент подключения пагинации [.swiper-pagination]

let arrow_button_state = ServicesArrowButton(".button__arrow", true, true);
let brand_panel_state = ServicesBrandPanel(".services__brands", true);

arrow_button_state.open_or_close(false);
brand_panel_state.open_or_close(false);

const MOBILE_WIDTH = 767; // ширина мобильной версии

// объявление объекта для работы с Swiper
let wsw = new WorkerSwiper(
  brand_panel_state.el,
  swiper_wrapp,
  swiper_slides,
  swiper_paginator
);
let swiper = null; // будущая ссылка на экземпляр Swiper

// определение состояния экрана [мобильное/десктоп]
function mobileScreen() {
  return screen.width <= MOBILE_WIDTH ? true : false;
}
// определение реакции на размер экрана
function sizeReaction() {
  let is_mobile = mobileScreen();

  if (is_mobile !== system_state) {
    if (is_mobile) {
      wsw.switchSwiper(is_mobile); // подключение стилей мобильной версии
      swiper = wsw.init(); // получение экземпляра Swiper
    } else {
      if (swiper !== null) {
        swiper.destroy(true, true);
      }
    }

    wsw.switchSwiper(is_mobile); // подключение стилей десктопа
    arrow_button_state.show_or_hide(is_mobile);
    system_state = is_mobile;
  }
}

document.addEventListener("DOMContentLoaded", sizeReaction);
window.addEventListener("resize", sizeReaction);

//---------------- ARROW BUTTON -----------------//

let arrow_button_controller = (function arrowButtonController() {
  let is_open = false;

  return () => {
    let is_arrow_state = arrow_button_state.open_or_close(is_open);

    brand_panel_state.open_or_close(is_arrow_state);
    is_open = is_open ? false : true;
  };
})();

arrow_button_state.el.addEventListener("click", () => {
  arrow_button_controller();
});
