const header = document.querySelector(".header-container");
const logo = document.querySelector(".logo");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.paddingBlock = "2px";
    logo.style.transform = "scale(.8)";
  } else {
    header.style.paddingBlock = "23px";
    logo.style.transform = "scale(1)";
  }
}
