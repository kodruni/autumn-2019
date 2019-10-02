let value = 1;
const maxValue = 20;

const update = () => {
  const counter = document.querySelector('#counter');
  counter.textContent = `${value}`;
  const maximum = document.querySelector('#maximum');
  maximum.textContent = `${maxValue}`;
  const knob = document.querySelector('#knob');
  const step = 100 / maxValue;
  knob.style.width = `${value * step}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  update();

  const plusBtn = document.querySelector('#plus');
  plusBtn.addEventListener('click', () => {
    if (value < maxValue) {
      value++;
      update();
    }
  });

  const minusBtn = document.querySelector('#minus');
  minusBtn.addEventListener('click', () => {
    if (value > 0) {
      value--;
      update();
    }
  });
});

















// const max = 50;
// let progress = 2;

// const update = () => {
//   const knob = document.querySelector('#knob');
//   knob.style.width = progress * 100 / max + '%';
//   const counter = document.querySelector('#counter');
//   counter.textContent = progress;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const maximum = document.querySelector('#maximum');
//   maximum.textContent = max;
  
//   update();
  
//   const btnMinus = document.querySelector('#minus');
//   btnMinus.addEventListener('click', () => {
//     if(progress > 0) {
//       progress--;
//       update();    
//     }
//   });

//   const btnPlus = document.querySelector('#plus');
//   document.addEventListener('click', () => {
//     if(progress < max) {
//       progress++;
//       update();
//     }
//   });
// });