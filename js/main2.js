const menu = document.getElementsByClassName("menu");
for (let i = 0; i < menu.length; i++){
  menu[i].addEventListener("click", toggle);
}
function toggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
}