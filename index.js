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

sr.reveal('.firstaboutsectiontext',{delay:400, origin:'bottom'})
sr.reveal('#firstaboutimg',{delay:200, origin:'left'})
sr.reveal('#introduction-text',{delay:200, origin:'left'})
sr.reveal('#Worship-with-usDiv',{delay:300, origin:'left'})

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 4000); 
}
