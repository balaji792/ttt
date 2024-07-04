let burger =document.querySelector(".burger");
let links =document.querySelector(".nav-links");
let text =document.querySelector(".text-center");
burger.addEventListener('click',()=> {
    links.classList.toggle("nav-show");
    text.classList.toggle("text-hide");

})