export default function (class_element, panel, is_hide, is_open) {
  let is_open_bt = is_open;
  let is_hide_bt = is_hide;
  let panel_control = panel;
  let dom_el = document.querySelector(class_element);

  (function init(){
    open_or_close(is_open_bt);
  })();

  function show_or_hide(is_hide) {
    // состояние видимости
    is_hide_bt = is_hide;
    if (is_hide) {
      dom_el.style.display = "none";
    } else {
      dom_el.style.display = "block";
    }
    return is_hide_bt;
  }

  function open_or_close(is_open) {
    // направлениек стрелок
    is_open_bt = is_open;
    if (is_open) {      
      dom_el.classList.add("button__arrow_open");
      dom_el.textContent = "Скрыть";
    } else {
      dom_el.classList.remove("button__arrow_open");
      dom_el.textContent = "Показать всё";
    }
    panel_control.open_or_close(is_open);
    return is_open_bt;
  }

  function click_handler() {
    is_open_bt = is_open_bt ? false : true;
    open_or_close(is_open_bt);
  }

  return {
    is_open: is_open_bt,
    is_hide: is_hide_bt,
    el: dom_el,
    click_handler: click_handler,
    show_or_hide: show_or_hide,
    open_or_close: open_or_close,
  };
}
