const menuBtn = document.querySelector(".menu_btn");
const menuNav = document.querySelector(".main_menu");
menuBtn.addEventListener("click", () =>
{
    if(menuNav.classList.contains("show")){
        menuNav.classList.add("hide");
        menuNav.classList.remove("show")
    }
    else{
        menuNav.classList.add("show");
        menuNav.classList.remove("hide")
    }

})