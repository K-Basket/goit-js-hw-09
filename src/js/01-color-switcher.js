const DELAY = 1000;
let intervalId = null;

const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');

btnStartEl.addEventListener('click', onStartChangeColorBg);
btnStopEl.addEventListener('click', onStopChangeColorBg);

getBtnActiveStart();

function onStartChangeColorBg() {
  getBtnActiveStop();

  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, DELAY);
}

function onStopChangeColorBg() {
  getBtnActiveStart();

  clearInterval(intervalId);
}

function getBtnActiveStart() {
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
}

function getBtnActiveStop() {
  btnStopEl.disabled = false;
  btnStartEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
