"use strict";

window.onscroll = function () {
  let scrollY = window.scrollY;

  /* container 3 */
  const cards = document.querySelectorAll(".imagen-texto");
  const img1 = document.getElementById("card1");
  const img2 = document.getElementById("card2");
  const img3 = document.getElementById("card3");

  /* funcion para que aparezcan cards desde abajo una a una */
  if (scrollY < '1450' || scrollY > '2550') {
    cards.forEach((card) => {
      card.style.transform = `translateY(600px)`;
    });
  } else{
    cards.forEach((card) => {
      card.classList.add("visible");
    });
    img1.style.transform = `translateY(-600px)`;
    img1.style.transition = `transform 1s`;
    img2.style.transform = `translateY(-600px)`;
    img2.style.transition = `transform 2s`;
    img3.style.transform = `translateY(-600px)`;
    img3.style.transition = `transform 3s`;
  }

  /** container 5 */
  /* ubicaciones de inicio y fin de cada imagen con su descripcion */
  const sections = [
    { img: "#img-0", text: "#text-0", start: 3600, end: 3940 },
    { img: "#img-1", text: "#text-1", start: 3950, end: 4295 },
    { img: "#img-2", text: "#text-2", start: 4299, end: 4648 },
    { img: "#img-3", text: "#text-3", start: 4650, end: 5010 },
    { img: "#img-4", text: "#text-4", start: 5011, end: 5300 },
    { img: "#img-5", text: "#text-5", start: 5351, end: 5690 },
    { img: "#img-6", text: "#text-6", start: 5698, end: 6020 },
    { img: "#img-7", text: "#text-7", start: 6121, end: 6490 },
    { img: "#img-8", text: "#text-8", start: 6492, end: 6815 },
    { img: "#img-9", text: "#text-9", start: 6820, end: 7230 },
    { img: "#img-10", text: "#text-10", start: 7232, end: 7498 },
  ];
  /** cambia visibilidad al scrollear de imagen y texto */
  function removeVisibleClasses() {
    document.querySelectorAll(".img").forEach((img) => {
      img.classList.remove("img-visible");
    });
    document.querySelectorAll(".text").forEach((text) => {
      text.classList.remove("text-visible");
    });
  }
  /** segun ubicacion del scroll llama a cambiar visibilidad */
  sections.forEach((section) => {
    if (scrollY >= section.start && scrollY <= section.end) {
      removeVisibleClasses();
      document.querySelector(section.img).classList.add("img-visible");
      document.querySelector(section.text).classList.add("text-visible");
      console.log(scrollY);
    }
  });
   
};

/* container 2*/
/** conjunto de imagenes que van cambiando */
const galeriaImagenes = [
  "img/container-dos/galeria-img1.png",
  "img/container-dos/galeria-img2.png",
  "img/container-dos/galeria-img3.png",
  "img/container-dos/galeria-img4.png",
];
let currentImageIndex = 0;
/* cambia de imagen cada 3 segundos */
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % galeriaImagenes.length;
  document.querySelector("#slideshow-image").src =
    galeriaImagenes[currentImageIndex];
}, 3000);

/*Movimiento personajes*/ 
const parallaxElementos = [
  { selector: '.personaje-4', speed: 0.05 },
  { selector: '.personaje-5', speed: 0.03 },
];

const applyParallax = () => {
  [...parallaxElementos].forEach(({ selector, speed }) => {
    const element = document.querySelector(selector);
    if (element) {
      const scrollY = window.scrollY;
      const offset = parseFloat(getComputedStyle(element).getPropertyValue('--offset') || 0);
      element.style.transform = `translateY(${scrollY * speed + offset}px)`;
    }
  });
};

window.addEventListener('scroll', () => {
  applyParallax();
});