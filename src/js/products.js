const btn4Col = document.querySelector(".btn--4");
const btn6Col = document.querySelector(".btn--6");
const galleryContainer = document.querySelector(".products");

btn4Col.addEventListener("click", toggle4Column);
btn6Col.addEventListener("click", toggle6Column);

function toggle4Column() {
  btn4Col.classList.add("control-active");
  btn6Col.classList.remove("control-active");
  galleryContainer.classList.remove("gallery6Col");
  console.log('prova')
}

function toggle6Column() {
  btn4Col.classList.remove("control-active");
  btn6Col.classList.add("control-active");
  galleryContainer.classList.add("gallery6Col");
    console.log('prova2')
}
