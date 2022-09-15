const burger_button = document.querySelector(".upper-menu__button-burger");
const modal_host = document.querySelector(".modal-host");
const mobile_menu_close_button = document.querySelector(
  ".mobile-menu__button-close"
);

function open_modal(is_open) {
  if (is_open) {
    modal_host.classList.add("modal-host_open");
  } else {
    modal_host.classList.remove("modal-host_open");
  }
}

// открывает модальное окно по клику на кнопке burger-button
burger_button.addEventListener("click", (e) => open_modal(true));

// закрывает модальное окно по клику на пустом пространстве модального окна
modal_host.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-host")) {
    open_modal(false);
  }
});

// закрывает модальное окно по клику на кнопке close-button
mobile_menu_close_button.addEventListener("click", (e) => open_modal(false));
