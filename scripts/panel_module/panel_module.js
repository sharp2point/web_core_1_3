import WorkerSwiper from "../panel_module/parts/swiper_init.js";
import ServicesArrowButton from "../panel_module/parts/services_arrow_button.js";
import ServicesBrandPanel from "../panel_module/parts/services_brand_panel.js";

class PanelModule {
  constructor(
    panel_class, // класс элемента панели
    button_class, // класс кнопки управления
    [wrapper_class, slide_class, paginator_class] // классы настройки swiper
  ) {
    this.is_mobile_state;

    this.panel = ServicesBrandPanel(panel_class, false); // инициализация блока брендов

    this.panel_button = ServicesArrowButton(
      // инициализация кнопки
      button_class,
      this.panel,
      true,
      false
    );

    this.swiper = new WorkerSwiper( // инициализация плагина swiper
      this.panel.el,
      wrapper_class,
      slide_class,
      paginator_class
    );

    this.panel_button.el.addEventListener("click", () => {
      this.panel_button.click_handler();
    });
  }

  toogleStateClass = (el, list_add, list_remove) => {
    el.classList.remove(...list_remove);
    el.classList.add(...list_add);
  };

  addSwiperClass = () => {
    this.toogleStateClass(
      this.swiper.swiper_host,
      ["services__brands", "swiper"],
      ["services__brands-large"]
    );
    this.toogleStateClass(
      this.swiper.wrapper,
      ["swiper-wrapper"],
      ["brands__wrapper-large"]
    );
    this.toogleStateClass(
      this.swiper.paginator,
      ["swiper-pagination"],
      ["brands__paginator"]
    );
    this.swiper.slider_list.forEach((slide) =>
      this.toogleStateClass(slide, ["swiper-slide"], [])
    );
  };

  removeSwiperClass = () => {
    if(this.swiper.swiper) this.swiper.swiper.destroy(true,true);
    this.swiper.swiper_host.removeAttribute("style");
   

    this.toogleStateClass(
      this.swiper.swiper_host,
      ["services__brands-large"],
      ["services__brands", "swiper"]
    );
    
    this.swiper.wrapper.removeAttribute("style");
    this.swiper.wrapper.removeAttribute("id");
    this.swiper.wrapper.removeAttribute("aria-live");
    this.toogleStateClass(
      this.swiper.wrapper,
      ["brands__wrapper-large"],
      ["swiper-wrapper"]
    );
    this.toogleStateClass(
      this.swiper.paginator,
      ["brands__paginator"],
      ["swiper-pagination"]
    );
    this.swiper.slider_list.forEach((slide) => {
      this.toogleStateClass(slide, [], ["swiper-slide"]);
      slide.removeAttribute("style");
      slide.removeAttribute("role");
      slide.removeAttribute("aria-label");
    });
  };

  switchState = (is_switch) => {
    if (is_switch) {
      // если мобильный вариант включаем Swiper
      this.addSwiperClass();
    } else {
      // если размер экрана больше мобильного удаляем Swiper
      this.removeSwiperClass();
    }
  };

  sizeReaction = (is_mobile) => {
    if (is_mobile !== this.is_mobile_state) {
      this.switchState(is_mobile); // переключение стилей
      this.panel_button.show_or_hide(is_mobile);
      this.is_mobile_state = is_mobile;

      if (is_mobile) {
        this.swiper.init(".swiper"); // получение экземпляра Swiper
      }
    }
  };
}

export default PanelModule;
