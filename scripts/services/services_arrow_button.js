export default function (class_element, is_hide, is_open) {
  let is_open_bt = is_open;
  let is_hide_bt = is_hide;
  let dom_el = document.querySelector(class_element);

  function show_or_hide(is_hide) { // состояние видимости
    is_hide_bt = is_hide;
    if (is_hide) {
      dom_el.style.display = "none";
    } else {
      dom_el.style.display = "block";
    }
    return is_hide_bt
  }

  function open_or_close(is_open) { // направлениек стрелок
    is_open_bt = is_open;
    if (is_open) {
      dom_el.classList.add("button__arrow_open");
      dom_el.textContent = "Скрыть";
    } else {
      dom_el.classList.remove("button__arrow_open");
      dom_el.textContent = "Показать всё";
    }
    return is_open_bt;
  }

  return {
    is_open: is_open_bt,
    is_hide: is_hide_bt,
    el: dom_el,
    show_or_hide: show_or_hide,
    open_or_close: open_or_close,
  };
}
