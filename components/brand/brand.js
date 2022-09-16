import Template from "./template.js";

class Brand extends HTMLElement {
  connectedCallback() {
    let img = this.getAttribute('img');    
    let alt = this.getAttribute('alt');
    this.innerHTML  = Template.render({img, alt});
  }
}
if (!customElements.get("service-brand")) {
  customElements.define("service-brand", Brand);
}

export default Brand;
