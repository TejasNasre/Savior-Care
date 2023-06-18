let docTitle = document.title;
window.addEventListener("blur",()=>{
    document.title = "Take Care :(";
});

window.addEventListener("focus",()=>{
    document.title = docTitle;
});


let rightAnime = {
     delay: 100 ,
     distance: '100px' ,
     duration: 1000,
     easing: 'cubic-bezier(0.5, 0, 0, 1)',
     interval: 100,
     origin: 'right'
}
ScrollReveal().reveal('.main-page-img img',rightAnime);
ScrollReveal().reveal('.des-info h1',rightAnime);
ScrollReveal().reveal('.des-info p',rightAnime);

let leftAnime = {
    delay: 100 ,
    distance: '100px' ,
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 100,
    origin: 'left'
}
ScrollReveal().reveal('.main-page-info h1 ',leftAnime);
ScrollReveal().reveal('.main-page-info p',leftAnime);
ScrollReveal().reveal('.main-page-btn',leftAnime);
ScrollReveal().reveal('.des-img img',leftAnime);

let topAnime = {
    delay: 100 ,
    distance: '100px' ,
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 100,
    origin: 'top'
}

let bottomAnime = {
    delay: 100 ,
    distance: '100px' ,
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 100,
    origin: 'bottom'
}
ScrollReveal().reveal('.box',bottomAnime);
ScrollReveal().reveal('.footer-info',bottomAnime);
ScrollReveal().reveal('.company',bottomAnime);
ScrollReveal().reveal('.region',bottomAnime);
ScrollReveal().reveal('.help',bottomAnime);