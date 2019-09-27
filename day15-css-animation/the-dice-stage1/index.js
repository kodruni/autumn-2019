let side = 3;

document.addEventListener('DOMContentLoaded', () => {
  const dice = document.querySelector('#dice');
  dice.src = `img/side${side}.png`;
  
  dice.addEventListener('click', () => {
    if (side < 6) {
      side++;
    } else {
      side = 1;
    }

    dice.src = `img/side${side}.png`;
  });
});
