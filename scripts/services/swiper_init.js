import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

class WorkerSwiper {
  constructor(swiper_host, wrapper, slider_list, paginator) {
    this.swiper_host = swiper_host;
    this.wrapper = wrapper;
    this.slider_list = slider_list;
    this.paginator = paginator;  
    this.swiper = null;  
  }
  init = ()=>{
    this.swiper = new Swiper(".swiper", {
      direction: "horizontal",
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: 16,
      width:265,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    return this.swiper;
  }

  mutatorElementClass = (el, list_add, list_remove) => {
    el.classList.remove(...list_remove);
    el.classList.add(...list_add);
  };

  addSwiperClass = () => {
    this.mutatorElementClass(
      this.swiper_host,
      ["services__brands", "swiper"],
      ["services__brands-large"]
    );
    this.mutatorElementClass(
      this.wrapper,
      ["swiper-wrapper"],
      ["brands__wrapper-large"]
    );
    this.mutatorElementClass(this.paginator, ["swiper-pagination"], ["brands__paginator"]);
    this.slider_list.forEach((slide) =>
      this.mutatorElementClass(slide, ["swiper-slide"], [])
    );
  };

  removeSwiperClass = () => {
    this.mutatorElementClass(
      this.swiper_host,
      ["services__brands-large"],
      ["services__brands", "swiper"]
    );
    this.mutatorElementClass(
      this.wrapper,
      ["brands__wrapper-large"],
      ["swiper-wrapper"]
    );
    this.mutatorElementClass(this.paginator, ["brands__paginator"], ["swiper-pagination"]);
    this.slider_list.forEach((slide) =>
      this.mutatorElementClass(slide, [], ["swiper-slide"])
    );
  };

  switchSwiper = (is_switch) => {
    if (is_switch) {
      // если мобильный вариант включаем Swiper
      this.addSwiperClass();
    } else {
      // если размер экрана больше мобильного удаляем Swiper
      this.removeSwiperClass();
    }
  };
}
export default WorkerSwiper;
