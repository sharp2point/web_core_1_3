import PanelModule from "../panel_module/panel_module.js";

let MOBILE_WIDTH = 767;

let host_brand_panel = new PanelModule(".services__brands", ".button__arrow", [
  ".wrapper",
  ".brands__item",
  ".swiper-pagination"
]);

function mobileScreen() {
  return screen.width <= MOBILE_WIDTH ? true : false;
}

document.addEventListener("DOMContentLoaded", () => {
  host_brand_panel.sizeReaction(mobileScreen());
});
window.addEventListener("resize", () => {
  host_brand_panel.sizeReaction(mobileScreen());
});
