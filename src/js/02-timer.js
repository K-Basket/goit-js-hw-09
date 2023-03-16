import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const btnStartEl = document.querySelector('[data-start');

btnStartEl.addEventListener('click', onStart);

let timerId = null;

activateBtn(true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    msSelected = selectedDates[0];

    if (msSelected <= Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    activateBtn(false);
  },
};

flatpickr('#datetime-picker', options);

function onStart() {
  activateBtn(true);

  timerId = setInterval(() => {
    msDiff = msSelected - Date.now();
    addTextConntent(msDiff);

    if (msDiff < 1000) {
      clearInterval(timerId);
      activateBtn(false);
      return;
    }
  }, 1000);
}

function addTextConntent(time) {
  daysEl.textContent = addLeadingZero(convertMs(time).days);
  hoursEl.textContent = addLeadingZero(convertMs(time).hours);
  minutesEl.textContent = addLeadingZero(convertMs(time).minutes);
  secondsEl.textContent = addLeadingZero(convertMs(time).seconds);
}

function activateBtn(bool) {
  btnStartEl.disabled = bool;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
