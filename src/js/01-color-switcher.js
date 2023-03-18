const DELAY = 1000;
let intervalId = null;

const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');

btnStartEl.addEventListener('click', onStartChangeColorBg);
btnStopEl.addEventListener('click', onStopChangeColorBg);

getBtnActive(false);

function onStartChangeColorBg() {
  getBtnActive(true);

  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, DELAY);
}

function onStopChangeColorBg() {
  getBtnActive(false);
  clearInterval(intervalId);
}

function getBtnActive(bool) {
  btnStartEl.disabled = bool;
  btnStopEl.disabled = !bool;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
