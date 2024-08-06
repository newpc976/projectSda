let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let alege = document.querySelector(".alege");
let backPhoto = document.querySelector(".backtoOne");
let mainPicture = document.querySelector(".pozamare");
let section = document.querySelector(".section");
let mainPictureSection = document.querySelector(".mainPictureSection");
let bgc2 = document.querySelector(".background2");
const menu = document.querySelector(".menu");
const submenu = document.querySelector(".submenu");
const closeSubmenu = document.querySelector(".close");
const pozaDissapear = document.querySelector(".pozaDissapear");
const dissapear = document.querySelector(".dissapear");
const closeDissapear = document.querySelector(".closeDissapear");
const comanda = document.querySelector(".comanda");
const body = document.body;

document.addEventListener("DOMContentLoaded", (event) => {
  closeDissapear.onclick = () => {
    // pozaDissapear.src = "poze/modelUnu.jpeg";
    dissapear.style.opacity = "0";
    dissapear.style.transitionDuration = "1.5s";
    dissapear.style.zIndex = "-2";
    mainPicture.src = "poze/modelUnu.jpeg";
  };
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
  const dropdown = document.getElementById("select");

  dropdown.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    handleOptionClick(selectedOption);
  });
});

function handleOptionClick(optionValue) {
  console.log(`Selected option: ${optionValue}`);
  // Add your desired action here based on the selected option
  // For example:
  if (optionValue === "option1") {
    section.style.display = "none";
    bgc2.style.display = "none";
    comanda.style.display = "none";
  } else if (optionValue === "option2") {
    comanda.style.display = "block";
    document.querySelector(".pozamare").src = "poze/model0.jpeg";
    mainPictureSection.style.justifyContent = "flex-start";
    one.src = "poze/model1.jpeg";
    two.src = "poze/13a0efd8da925003fb73541eb5280f4e.jpg";
    three.src = "poze/09e0039de3aaa64682e4149ae137d4fe (1).jpg";
    four.src = "poze/pexels-photo-3183197.jpeg";
    five.src = "Carpenter/carpenter2.jpeg";
    six.src = "poze/b7e1d7974d450410d480a329ecc6bad0.jpg";
    one.onclick = () => {
      pozaDissapear.src = "poze/model1.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = "poze/modelUnu.jpeg";
      mainPictureSection.style.justifyContent = "flex-start";
    };
    two.onclick = () => {
      pozaDissapear.src = two.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = "poze/13a0efd8da925003fb73541eb5280f4e.jpg";
      mainPictureSection.style.justifyContent = "flex-start";
    };
    three.onclick = () => {
      pozaDissapear.src = three.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = "poze/09e0039de3aaa64682e4149ae137d4fe (1).jpg";
      mainPictureSection.style.justifyContent = "center";
    };
    four.onclick = () => {
      pozaDissapear.src = four.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = "poze/pexels-photo-3183197.jpeg";
      mainPictureSection.style.justifyContent = "center";
    };
    five.onclick = () => {
      pozaDissapear.src = five.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = five.src;
      mainPictureSection.style.justifyContent = "flex-end";
    };
    six.onclick = () => {
      pozaDissapear.src = six.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = "poze/b7e1d7974d450410d480a329ecc6bad0.jpg";
      mainPictureSection.style.justifyContent = "flex-end";
    };
    backPhoto.onclick = () => {
      document.querySelector(".pozamare").src = "poze/model0.jpeg";
    };
    section.style.display = "grid";
    //bgc2.style.display = "flex";
  } else if (optionValue === "option3") {
    comanda.style.display = "block";
    document.querySelector(".pozamare").src =
      "Balustrada/Sabina & Nicolae (1390).jpg";
    one.src = "ElementeExterior/poza1.jpg";
    two.src = "ElementeExterior/poza2.jpg";
    three.src = "ElementeExterior/poza nr 3.jpg";
    four.src = "ElementeExterior/poza nr4.jpg";
    five.src = "ElementeExterior/poza nr 5.jpg";
    six.src = "ElementeExterior/poza nr 6.jpg";
    mainPictureSection.style.justifyContent = "flex-start";

    one.onclick = () => {
      pozaDissapear.src = "Balustrada/Sabina & Nicolae (1226).jpg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPictureSection.style.justifyContent = "flex-start";
      mainPicture.src = one.src;
      mainPictureSection.style.justifyContent = "flex-start";
    };
    two.onclick = () => {
      pozaDissapear.src = two.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = two.src;
      mainPictureSection.style.justifyContent = "flex-start";
    };
    three.onclick = () => {
      pozaDissapear.src = three.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = three.src;
      mainPictureSection.style.justifyContent = "center";
    };
    four.onclick = () => {
      pozaDissapear.src = four.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = four.src;
      mainPictureSection.style.justifyContent = "center";
    };
    five.onclick = () => {
      pozaDissapear.src = five.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = five.src;
      mainPictureSection.style.justifyContent = "flex-end";
    };
    six.onclick = () => {
      pozaDissapear.src = six.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = six.src;
      mainPictureSection.style.justifyContent = "flex-end";
    };
    backPhoto.onclick = () => {
      document.querySelector(".pozamare").src =
        "Balustrada/Sabina & Nicolae (1390).jpg";
      section.style.display = "grid";
      bgc2.style.display = "flex";
    };
    section.style.display = "grid";
    bgc2.style.display = "flex";
  } else if (optionValue === "option4") {
    comanda.style.display = "block";
    document.querySelector(".pozamare").src = "foisor/big.jpg";
    one.src = "ElementeExterior/poza nr 7.jpg";
    two.src = "ElementeExterior/poza nr 8.jpg";
    three.src = "ElementeExterior/poza nr 9.jpg";
    four.src = "ElementeExterior/poza nr 10.jpg";
    five.src = "ElementeExterior/poza nr 11.jpg";
    six.src = "ElementeExterior/poza nr 12.jpg";

    mainPictureSection.style.justifyContent = "flex-start";
    one.onclick = () => {
      pozaDissapear.src = one.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = one.src;
      mainPictureSection.style.justifyContent = "flex-start";
    };
    two.onclick = () => {
      pozaDissapear.src = two.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = two.src;
      mainPictureSection.style.justifyContent = "flex-start";
    };
    three.onclick = () => {
      pozaDissapear.src = three.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = three.src;
      mainPictureSection.style.justifyContent = "center";
    };
    four.onclick = () => {
      pozaDissapear.src = four.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = four.src;
      mainPictureSection.style.justifyContent = "center";
    };
    five.onclick = () => {
      pozaDissapear.src = five.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = five.src;
      mainPictureSection.style.justifyContent = "flex-end";
    };
    six.onclick = () => {
      pozaDissapear.src = six.src;
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = six.src;
      mainPictureSection.style.justifyContent = "flex-end";
    };
    backPhoto.onclick = () => {
      document.querySelector(".pozamare").src = "foisor/big.jpg";
    };
    section.style.display = "grid";
    bgc2.style.display = "flex";
  }
}
// window.onload = () => {
//   one.onclick = () => {
//     mainPicture.src = one.src;
//     mainPictureSection.style.justifyContent = "flex-start";
//   };
//   two.onclick = () => {
//     mainPicture.src = two.src;
//     mainPictureSection.style.justifyContent = "flex-start";
//   };
//   three.onclick = () => {
//     mainPicture.src = three.src;
//     mainPictureSection.style.justifyContent = "center";
//   };
//   four.onclick = () => {
//     mainPicture.src = four.src;
//     mainPictureSection.style.justifyContent = "center";
//   };
//   five.onclick = () => {
//     mainPicture.src = five.src;
//     mainPictureSection.style.justifyContent = "flex-end";
//   };
//   six.onclick = () => {
//     mainPicture.src = six.src;
//     mainPictureSection.style.justifyContent = "flex-end";
//   };
//   backPhoto.onclick = () => {
//     document.querySelector(".pozamare").src = "poze/pexels-photo-3183197.jpeg";
//   };
// };


//console.log(">>>>", process.env)
console.log('Service_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);