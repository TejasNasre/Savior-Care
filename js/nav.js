const  forOpenNav = document.getElementById("bars");

const blocknav = document.getElementById("navigation");

const idOpenNav = document.getElementById("openNav");

const main = document.getElementById("webpage");

const footer = document.getElementById("footer");

const atag = document.getElementsByTagName("a");

console.log(atag);
forOpenNav.addEventListener('click', () =>{
    idOpenNav.classList.toggle("navopen");
    blocknav.classList.toggle("blocknav");
    forOpenNav.classList.toggle("bar-position");
})