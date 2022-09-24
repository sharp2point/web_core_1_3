import { WorkerSwiper } from "../panel_module/parts/swiper_init.js";
import PanelModule from "../panel_module/panel_module.js";

let MOBILE_WIDTH = 767;

/* ---------------- НАСТРОЙКА ПАНЕЛИ ------------- */

let host_brand_panel = new PanelModule(".services__brands", ".button__arrow");

        /* --- НАСТРОЙКА ОБЁРТКИ Swiper --- */
let swiper = new WorkerSwiper(".swiper");

swiper.setHost(
  ".services__brands",
  ["services__brands-large"],
  ["services__brands", "swiper"]
);
swiper.setWrapper(".wrapper", ["brands__wrapper-large"], ["swiper-wrapper"]);
swiper.setPaginator(
  ".swiper-pagination",
  ["brands__paginator"],
  ["swiper-pagination"]
);
swiper.setSliderList(".brands__item", [], ["swiper-slide"]);

host_brand_panel.setWorkSwiper(swiper);  

/* --------------------- EVENTS ---------------- */

function mobileScreen() {
  return screen.width <= MOBILE_WIDTH ? true : false;
}

document.addEventListener("DOMContentLoaded", () => {
  host_brand_panel.sizeReaction(mobileScreen());
});
window.addEventListener("resize", () => {
  host_brand_panel.sizeReaction(mobileScreen());
});
