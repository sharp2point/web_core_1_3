import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

class WorkerSwiper {
  constructor(swiper_host, wrapper_class, slider_class, paginator_class) {
    this.class_obj = {
      wrapper_class: wrapper_class,
      slider_class: slider_class,
      paginator_class: paginator_class
    }
    
    this.swiper_host = swiper_host;
    this.wrapper =  document.querySelector(wrapper_class);
    this.slider_list = document.querySelectorAll(slider_class);
    this.paginator = document.querySelector(paginator_class);      
    this.swiper = null;  
  }
  init = (swiper_class)=>{
    this.swiper = new Swiper(swiper_class, {
      direction: "horizontal",
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: 16,
      width:265,
      pagination: {
        el: this.class_obj.paginator_class,
        clickable: true,
      },
    });
    return this.swiper;
  }
}
export default WorkerSwiper;
