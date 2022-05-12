const openBth = document.getElementById('openBth');
const closeBth = document.getElementById('closeBth');
const modal = document.getElementById('modal');
openBth.addEventListener('click', () => {
  modal.style.display = 'block';
})

closeBth.addEventListener('click', () => {
  modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content-inner') && e.target.id !== "openBth") {
    modal.style.display = 'none';
  }
});