import emailjs from "@emailjs/browser";

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
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
    dissapear.style.opacity = "0";
    dissapear.style.transitionDuration = "1.5s";
    dissapear.style.zIndex = "-1";
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
  if (optionValue === "option1") {
    section.style.display = "none";
    comanda.style.display = "none";
  } else if (optionValue === "option2") {
    comanda.style.display = "block";
    one.src = "public/Cerdac/model1.jpeg";
    two.src = "public/Cerdac/model2.jpeg";
    three.src = "public/Cerdac/model3.jpeg";
    four.src = "public/Cerdac/model4.jpeg";
    five.src = "public/Cerdac/model5.jpeg";
    six.src = "public/Cerdac/model6.jpeg";
    one.onclick = () => {
      dissapear.style.display = "flex";
      pozaDissapear.src = "public/Cerdac/cerdac,model1.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
    };
    two.onclick = () => {
      pozaDissapear.src = "public/Cerdac/cerdac,model2.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
    };
    three.onclick = () => {
      pozaDissapear.src = "public/Cerdac/cerdac,model3.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
    };
    four.onclick = () => {
      pozaDissapear.src = "public/Cerdac/cerdac,model4.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
    };
    five.onclick = () => {
      pozaDissapear.src = "public/Cerdac/cerdac,model5.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
    };
    six.onclick = () => {
      pozaDissapear.src = "public/Cerdac/cerdac,model6.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
    };
    section.style.display = "flex";
  } else if (optionValue === "option3") {
    comanda.style.display = "block";
    one.src = "public/Balustrada/model1.jpeg";
    two.src = "public/Balustrada/model2.jpeg";
    three.src = "public/Balustrada/model3.jpeg";
    four.src = "public/Balustrada/model4.jpeg";
    five.src = "public/Balustrada/model5.jpeg";
    six.src = "public/Balustrada/model6.jpeg";
    one.onclick = () => {
      dissapear.style.display = "flex";
      pozaDissapear.src = "public/Balustrada/balcon,model1.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPictureSection.style.justifyContent = "flex-start";
      mainPicture.src = "public/Balustrada/balcon,model1.jpeg";
    };
    two.onclick = () => {
      pozaDissapear.src = "public/Balustrada/balcon,model2.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = "public/Balustrada/balcon,model2.jpeg";
      mainPictureSection.style.justifyContent = "center";
    };
    three.onclick = () => {
      pozaDissapear.src = "public/Balustrada/balcon,model3.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = "public/Balustrada/balcon,model3.jpeg";
      mainPictureSection.style.justifyContent = "flex-end";
    };
    four.onclick = () => {
      pozaDissapear.src = "public/Balustrada/balcon,model4.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = "public/Balustrada/balcon,model4.jpeg";
      mainPictureSection.style.justifyContent = "flex-start";
    };
    five.onclick = () => {
      pozaDissapear.src = "public/Balustrada/balcon,model5.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = "public/Balustrada/balcon,model5.jpeg";
      mainPictureSection.style.justifyContent = "center";
    };
    six.onclick = () => {
      pozaDissapear.src = "public/Balustrada/balcon,model6.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      mainPicture.src = "public/Balustrada/balcon,model6.jpeg";
      mainPictureSection.style.justifyContent = "flex-end";
    };
    section.style.display = "flex";
    bgc2.style.display = "flex";
  } else if (optionValue === "option4") {
    comanda.style.display = "block";
    one.src = "public/Foisor/model1.jpeg";
    two.src = "public/Foisor/model2.jpeg";
    three.src = "public/Foisor/model3.jpeg";
    four.src = "public/Foisor/model4.jpeg";
    five.src = "public/Foisor/model5.jpeg";
    six.src = "public/Foisor/model6.jpeg";
    one.onclick = () => {
      pozaDissapear.src = "public/Foisor/foisor,model1.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      dissapear.style.display = "flex";
    };
    two.onclick = () => {
      pozaDissapear.src = "public/Foisor/foisor,model2.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      dissapear.style.display = "flex";
    };
    three.onclick = () => {
      pozaDissapear.src = "public/Foisor/foisor,model3.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
      dissapear.style.display = "flex";
    };
    four.onclick = () => {
      dissapear.style.display = "flex";
      pozaDissapear.src = "public/Foisor/foisor,model4.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
    };
    five.onclick = () => {
      dissapear.style.display = "flex";
      pozaDissapear.src = "public/Foisor/foisor,model5.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
    };
    six.onclick = () => {
      dissapear.style.display = "flex";
      pozaDissapear.src = "public/Foisor/foisor,model6.jpeg";
      dissapear.style.opacity = "1";
      dissapear.style.zIndex = "1";
    };
    section.style.display = "flex";
    bgc2.style.display = "flex";
  }
}
//console.log(">>>>", process.env)
// console.log('SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
// console.log('TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
// console.log('PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
const categorySelect = document.getElementById("form-category-select");
const modelSelect = document.getElementById("form-model-select");
const gtySelect = document.getElementById("form-qty-select");
const emailInput = document.getElementById("form-email-input");
const nameInput = document.getElementById("form-name-input");
const loader = document.querySelector(".loader");
const formData = {};

categorySelect.addEventListener("change", (e) => {
  if (e.target.checked) formData.category = e.target.id;
});

modelSelect.addEventListener("change", (e) => {
  if (e.target.checked) formData.model = e.target.id;
});

gtySelect.addEventListener("change", (e) => {
  formData.qty = e.target.value;
});

emailInput.addEventListener("input", (e) => {
  formData.email = e.target.value;
});

nameInput.addEventListener("input", (e) => {
  formData.name = e.target.value;
});

const sendEmail = () => {
  loader.style.display = "block";
  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData
    )
    .then(() => {
      console.log("send ok");
      alert("Comanda s-a facut cu succes!");
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      loader.style.display = "block";
    });
};

const handleSubmitOrder = () => {
  sendEmail();
};

const submitOrderBtn = document.getElementById("submit-order-btn");

submitOrderBtn.addEventListener("click", handleSubmitOrder);

window.addEventListener("load", () => {
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });
});
