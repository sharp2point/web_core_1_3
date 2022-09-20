import WorkerSwiper from "./swiper_init.js";

let system_state = null; // флаг мобильное/полное состояние
let arrow_button = document.querySelector(".button__arrow");
let swiper_host = document.querySelector(".services__brands");// элемент подключения Swiper [.swiper]
let swiper_wrapp = document.querySelector(".wrapper");// элемент подключения [.swiper-wrapper]
let swiper_slides = document.querySelectorAll(".brands__item");// список элементов [.swiper-slider]
let swiper_paginator = document.querySelector(".brands__paginator");// элемент подключения пагинации [.swiper-pagination]

const MOBILE_WIDTH = 539; // ширина мобильной версии

// объявление объекта для работы с Swiper
let wsw = new WorkerSwiper(
  swiper_host,
  swiper_wrapp,
  swiper_slides,
  swiper_paginator
);
let swiper = null; // будущая ссылка на экземпляр Swiper

// определение состояния экрана [мобильное/десктоп]
function mobileScreen() {
  return screen.width <= MOBILE_WIDTH ? true : false;
}

// определение состояния панели брендов и кнопки открытия/закрытия панели брендов
function setStateArrowButton(is_mobile) {
  if (is_mobile) {
    swiper_host.classList.remove("services__brands-large_open");
    arrow_button.style.display = "none";
  } else {
    arrow_button.style.display = "block";
    if (arrow_button.classList.contains("button__arrow_open")) {
      swiper_host.classList.add("services__brands-large_open");
    }
  }
}

// определение реакции на размер экрана
function sizeReaction() {
  let is_mobile = mobileScreen();

  if (is_mobile !== system_state) {
    if (is_mobile) {
      setStateArrowButton(is_mobile);
      
      wsw.switchSwiper(is_mobile); // подключение стилей мобильной версии
      swiper = wsw.init();// получение экземпляра Swiper
      
      swiper.on('setTranslate',(e)=>{
        console.log(e.translate)
      })
      system_state = is_mobile;
    } else {
      setStateArrowButton(is_mobile);

      if (swiper !== null) {
        swiper.destroy(true, true);
      }
      wsw.switchSwiper(is_mobile); // подключение стилей десктопа
      system_state = is_mobile;
    }
  }
}

document.addEventListener("DOMContentLoaded", sizeReaction);
window.addEventListener("resize", sizeReaction);

//---------------- ARROW BUTTON -----------------//

function toggleArrowButtonReaction(is_open) {
  if (is_open) {
    arrow_button.classList.add("button__arrow_open");
    swiper_host.classList.add("services__brands-large_open");
    arrow_button.innerText = "Скрыть";
  } else {
    arrow_button.classList.remove("button__arrow_open");
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
let arrow_button_controller = arrowButtonController();

arrow_button.addEventListener("click", () => {
  arrow_button_controller();
});
