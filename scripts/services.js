import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';
import Brand from "../components/brand/brand.js";

// const services_arrow = document.querySelector(".services__arrow");
// const services_brands = document.querySelector(".services__brands");

// // Описание состояний панели брендов [services_brands]
// const services_state = {
//   open: { height: "422px", text: "Скрыть" },
//   close: { height: "180px", text: "Показать все" },
// };

// // Функция - переключатель состояний [services_state.open/services_state.close]
// function open_services() {
//   let is_open = false;

//   return function () {
//     is_open = is_open ? false : true;
//     return is_open ? services_state.close : services_state.open;
//   };
// }
// let state = open_services();

// // обработчик события клика на кнопке [Скрыть/Показать всё]
// services_arrow.addEventListener("click", () => {
//   let panel_state = state();
//   services_brands.style.height = panel_state.height;
//   services_arrow.textContent = panel_state.text;
//   services_arrow.classList.toggle("services__arrow_open");
// });

//------------------------------------------------------------------------
// --------------- SWIPER ----------------
window.addEventListener("load", function () {
  let swiper = undefined;
  let mobile_media_query = matchMedia(
    "(max-width: 500px) and (min-width: 0px)"
  );
  let swiper_host = document.querySelector(".services__brands");

  const brands_img_root = "./img/brands/";
  let brands_image_url = [
    "apple.png",
    "bosh.png",
    "hp.png",
    "lenovo.png",
    "samsung.png",
    "sony.png",
    "viewsonic.png",
    "apple.png",
    "bosh.png",
    "hp.png",
    "lenovo.png",
  ];

  function createClassElement(clases) {
    let el = document.createElement("div");
    clases.forEach((class_name) => el.classList.add(class_name));
    return el;
  }

  function initSwiper() {
    return new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  function initSwiperSlides(swiper) {
    brands_image_url.forEach((url) => {
      let swiper_item = createClassElement(["swiper-slide"]);

      swiper_item.innerHTML = `<service-brand img=${
        brands_img_root + url
      } alt="brand image"/>`;
      swiper.appendSlide(swiper_item);
    });
  }

  function createSwiperDOM(host_element) {
    let swiper_slider = createClassElement(["swiper", "mySwiper"]);
    let swiper_wrapper = createClassElement(["swiper-wrapper"]);
    let swiper_paginator = createClassElement(["swiper-pagination"]);

    swiper_slider.appendChild(swiper_wrapper);
    swiper_slider.appendChild(swiper_paginator);
    host_element.appendChild(swiper_slider);

    swiper = initSwiper();
    initSwiperSlides(swiper);
  }

  function removeSwiperDOM(host_element) {
    let swiper = document.querySelector(".swiper")
    if(swiper){
      host_element.removeChild(swiper);
    }    
  }

  mobile_media_query.addEventListener("change", () => {
    if (mobile_media_query.matches) {
      createSwiperDOM(swiper_host);
    } else {
      removeSwiperDOM(swiper_host);
    }
  });
});
