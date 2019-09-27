const roll = () => Math.floor(Math.random() * 6) + 1;

const updateFace = (diceIdx, faceValue) => {
  const dice = document.querySelector(`#dice${diceIdx}`);
  dice.src = `img/side${faceValue}.png`;
}

const rollAll = () => {
  updateFace(0, roll());
  updateFace(1, roll());
  updateFace(2, roll());
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('keypress', () => {
    rollAll();
  });

  const dice0 = document.querySelector('#dice0');
  const dice1 = document.querySelector('#dice1');
  const dice2 = document.querySelector('#dice2');

  dice0.addEventListener('click', () => {
    updateFace(0, roll());
  });

  dice1.addEventListener('click', () => {
    updateFace(1, roll());
  });
  
  dice2.addEventListener('click', () => {
    updateFace(2, roll());
  });
});
