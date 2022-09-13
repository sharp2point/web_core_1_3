const burger_button = document.querySelector(".upper-menu__button-burger");
const mobile_menu = document.querySelector(".mobile-menu");
const mobile_menu_close_button = document.querySelector(".mobile-menu__button-close");

burger_button.addEventListener("click",(e)=>{
    mobile_menu.classList.add("mobile-menu_open")
    mobile_menu_close_button.addEventListener("click",(e)=>{
        mobile_menu.classList.remove("mobile-menu_open")
    })
})