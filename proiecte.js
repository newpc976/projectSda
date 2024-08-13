const body = document.getElementsByTagName("BODY")[0];
const width = body.offsetWidth;
const menu = document.querySelector(".menu");
const submenu = document.querySelector(".submenu");
const closeSubmenu = document.querySelector(".close");
const closeImg = document.querySelector(".closeImg");
const parere = document.querySelector(".parerea");
const elementeInterior = document.querySelector(".p_interior");
const elementeExterior = document.querySelector(".p_exterior");
const poza1 = document.querySelector(".pozaSlide1");
const poza2 = document.querySelector(".pozaSlide2");
const poza3 = document.querySelector(".pozaSlide3");
const poza4 = document.querySelector(".pozaSlide4");
const poza5 = document.querySelector(".pozaSlide5");
const poza6 = document.querySelector(".pozaSlide6");

window.onload = () => {
  menu.onclick = () => {
    submenu.style.display = "flex";
    submenu.style.pointerEvents = "auto";
    submenu.style.right = "10px";
    submenu.style.opacity = "1";
  };
  closeSubmenu.onclick = () => {
    submenu.style.opacity = "0";
    submenu.style.pointerEvents = "none";
  };
  closeImg.onclick = () => {
    parere.style.display = "none";
    parere.style.pointerEvents = "none";
  };
  elementeInterior.onclick = () => {
    poza1.src = "public/ElementeInterior/poza1.jpg";
    poza2.src = "public/ElementeInterior/poza2.jpg";
    poza3.src = "public/ElementeInterior/poza3.jpg";
    poza4.src = "public/ElementeInterior/poza4.jpg";
    poza5.src = "public/ElementeInterior/poza5.jpg";
    poza6.src = "public/ElementeInterior/poza6.jpg";
    parere.style.display = "flex";
    parere.style.pointerEvents = "auto";
  };
  elementeExterior.onclick = () => {
    parere.style.display = "flex";
    parere.style.zIndex = "999";
    parere.style.pointerEvents = "auto";
    poza1.src = "public/ElementeExterior/poza nr 1.jpg";
    poza2.src = "public/ElementeExterior/poza nr 2.jpg";
    poza3.src = "public/ElementeExterior/poza nr 3.jpg";
    poza4.src = "public/ElementeExterior/poza nr4.jpg";
    poza5.src = "public/ElementeExterior/poza nr 5.jpg";
    poza6.src = "public/ElementeExterior/poza nr 6.jpg";
  };
};

let slidenumar = 1;
show(slidenumar);

// Next/previous controls
function plusSlides(n) {
  show((slidenumar += n));
}

// Thumbnail image controls
function currentSlide(n) {
  show((slidenumar = n));
}

function show(n) {
  let i;
  let slides = document.getElementsByClassName("slidurile");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slidenumar = 1;
  }
  if (n < 1) {
    slidenumar = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slidenumar - 1].style.display = "block";
  dots[slidenumar - 1].className += " active";
}
console.log(width);
