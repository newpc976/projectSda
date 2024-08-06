const menu = document.querySelector(".menu");
const submenu = document.querySelector(".submenu");
const closeSubmenu = document.querySelector(".close");
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
};
