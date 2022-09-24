import ServicesArrowButton from "../panel_module/parts/services_arrow_button.js";
import ServicesBrandPanel from "../panel_module/parts/services_brand_panel.js";

class PanelModule {
  constructor(
    panel_class, // класс элемента панели
    button_class, // класс кнопки управления
  ) {
    this.is_mobile_state;

    this.panel = ServicesBrandPanel(panel_class, false); // инициализация блока брендов

    this.panel_button = ServicesArrowButton(
      button_class,
      this.panel,
      true,
      false
    ); // инициализация кнопки

    this.wswiper; // экземпляр WorkSwiper

    this.panel_button.el.addEventListener("click", () => {
      this.panel_button.click_handler();
    });
  }
  /* -------- METHODS --------- */
  setWorkSwiper = (wswiper)=>{
    this.wswiper = wswiper;
  }

  sizeReaction = (is_mobile) => {
    if (is_mobile !== this.is_mobile_state) {
      this.wswiper.toggleSwiperClass(is_mobile); // переключение стилей
      this.panel_button.show_or_hide(is_mobile);// скрыть/показать кнопку
      this.is_mobile_state = is_mobile;

      if (is_mobile) {
        this.wswiper.init()
      }else{
        this.wswiper.clear();
      }
    }
  };
}

export default PanelModule;
