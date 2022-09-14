const services_arrow = document.querySelector(".services__arrow");
const services_brands = document.querySelector(".services__brands");
let is_open = true;
const open_height = "422px";
const close_height = "180px";

services_arrow.addEventListener("click",()=>{
    is_open = !is_open;
    services_brands.style.height = is_open ?  open_height : close_height;
    if(is_open){
        services_arrow.textContent = "Скрыть";
        services_arrow.classList.add("services__arrow_open");
    }else{
        services_arrow.textContent = "Показать все";
        services_arrow.classList.remove("services__arrow_open");
    }
    
})