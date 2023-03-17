import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);
  const dataform = {};

  formData.forEach((value, name) => {
    dataform[name] = Number(value);
    return;
  });

  for (let i = 1; i <= dataform.amount; i += 1) {
    createPromise(i, dataform.delay).then(onSuccess).catch(onError);
    dataform.delay += dataform.step;
  }

  evt.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}

// function for then
function onSuccess({ position, delay }) {
  console.log('✅', { position, delay });
  Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

// function for catch
function onError({ position, delay }) {
  console.log('❌', { position, delay });
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}
