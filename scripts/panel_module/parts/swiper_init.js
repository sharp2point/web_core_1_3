import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

class ElementWorkSwiper {
  constructor(el, el_class, mobile_class, large_class) {
    this.el = el;
    this.el_class = el_class;
    this.mobile_class = mobile_class;
    this.large_class = large_class;
  }
  toggleState = (is_mobile) => {
    if (is_mobile) {
      this.el.classList.remove(...this.mobile_class);
      this.el.classList.add(...this.large_class);
    } else {
      this.el.classList.add(...this.mobile_class);
      this.el.classList.remove(...this.large_class);
    }
  };
}
class WorkerSwiper {
  constructor(swiper_class) {
    this.swiper_class = swiper_class;
    this.host;
    this.wrapper;
    this.paginator;
    this.slider_list = [];
    this.swiper = null;
  }
  init = () => {
    this.swiper = new Swiper(this.swiper_class, {
      direction: "horizontal",
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: 16,
      width: 265,
      pagination: {
        el: this.paginator.el_class,
        clickable: true,
      },
    });
    return this.swiper;
  };

  setHost = (el_class, mobile_class_list, large_class_list) => {
    this.host = new ElementWorkSwiper(
      document.querySelector(el_class),
      el_class,
      mobile_class_list,
      large_class_list
    );
  };

  setWrapper = (el_class, mobile_class_list, large_class_list) => {
    this.wrapper = new ElementWorkSwiper(
      document.querySelector(el_class),
      el_class,
      mobile_class_list,
      large_class_list
    );
  };

  setPaginator = (el_class, mobile_class_list, large_class_list) => {
    this.paginator = new ElementWorkSwiper(
      document.querySelector(el_class),
      el_class,
      mobile_class_list,
      large_class_list
    );
  };

  setSliderList = (el_class, mobile_class_list, large_class_list) => {
    let el = document.querySelectorAll(el_class);
    el.forEach((slide) => {
      this.slider_list.push(
        new ElementWorkSwiper(
          slide,
          el_class,
          mobile_class_list,
          large_class_list
        )
      );
    });
  };

  toggleSwiperClass = (is_mobile) => {
    this.host.toggleState(is_mobile);
    this.wrapper.toggleState(is_mobile);
    this.paginator.toggleState(is_mobile);
    this.slider_list.forEach((slide) => {
      slide.toggleState(is_mobile);
    });
  };

  clear = () => { // очистка от атрибутов swiper
    if(this.swiper !== null) {
      this.swiper.destroy(true, true);
    }
    this.host.el.removeAttribute("style");
    this.wrapper.el.removeAttribute("style");
    this.wrapper.el.removeAttribute("id");
    this.wrapper.el.removeAttribute("aria-live");
    this.slider_list.forEach((slide) => {
      slide.el.removeAttribute("style");
      slide.el.removeAttribute("role");
      slide.el.removeAttribute("aria-label");
    });
  };
}
export { WorkerSwiper, ElementWorkSwiper };
