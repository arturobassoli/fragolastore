const discountBannerButton = document.querySelector(".chiudi-discount-banner");
const discountBanner = document.querySelector(".discount-banner");

discountBannerButton.addEventListener("click", salvaInLocalStorage);

function salvaInLocalStorage(event) {
  localStorage.setItem("cliccato", "si");
  controllaLocalStorage();
}

function controllaLocalStorage() {
  if (localStorage.getItem("cliccato")) {
    discountBanner.setAttribute("style", "display:none;");
  }
}

controllaLocalStorage();
