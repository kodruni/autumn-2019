const roll = () => Math.floor(Math.random() * 6) + 1;

const updateFace = (faceValue) => {
  const dice = document.querySelector('#dice');
  dice.src = `img/side${faceValue}.png`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateFace(3);

  const dice = document.querySelector('#dice');
  dice.addEventListener('click', () => {
    updateFace(roll());
  });
});
