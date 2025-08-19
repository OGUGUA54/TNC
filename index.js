const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
 header.classList.toggle (".sticky", window.scrollY > 0);
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
     menu.classList.toggle("bx-x");
     navbar.classList.toggle("active");
}

window.onscroll = () => {
     menu.classList.remove('bx-x');
     navbar.classList. remove('active');
}

window.sr = ScrollReveal ({
    distance: '25px',
      duration: 2500,
      reset: true
})

sr.reveal('.firstaboutxt',{delay:400, origin:'right'})
sr.reveal('#aboutimgdiv',{delay:200, origin:'bottom'})
sr.reveal('#introduction-text',{delay:200, origin:'left'})
sr.reveal('#Worship-with-usDiv',{delay:200, origin:'left'})