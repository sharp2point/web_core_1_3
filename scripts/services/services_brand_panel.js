export default function (class_element, is_open) {
  let is_open_pnl = is_open;
  let dom_el = document.querySelector(class_element);

  function open_or_close(is_open) {
    is_open_pnl = is_open
    if (is_open) {
      dom_el.classList.remove("services__brands-large_close");
    } else {
      dom_el.classList.add("services__brands-large_close");
    }
    return is_open_pnl;
  }

  return {
    is_open_pnl: is_open_pnl,
    el: dom_el,
    open_or_close: open_or_close,
  };
}
