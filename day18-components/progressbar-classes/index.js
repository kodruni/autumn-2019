const bar = new ProgressBar(10, 30);

const update = () => {
  const counter = document.querySelector('#counter');
  counter.textContent = `${bar.value}`;
  const maximum = document.querySelector('#maximum');
  maximum.textContent = `${bar.max}`;
  const knob = document.querySelector('#knob');
  const step = 100 / bar.max;
  knob.style.width = `${bar.value * step}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  update();

  const plusBtn = document.querySelector('#plus');
  plusBtn.addEventListener('click', () => {
    bar.increment();
    update();
  });

  const minusBtn = document.querySelector('#minus');
  minusBtn.addEventListener('click', () => {
    bar.decrement();
    update();
  });
});
