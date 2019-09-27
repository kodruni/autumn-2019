const roll = () => Math.floor(Math.random() * 6) + 1;

const updateFace = (dice, faceValue) => {
  dice.src = `img/side${faceValue}.png`;
}

const rollAll = () => {
  updateFace(document.querySelector('#dice0'), roll());
  updateFace(document.querySelector('#dice1'), roll());
  updateFace(document.querySelector('#dice2'), roll());
}

const handleDiceClick = (event) => {
  updateFace(event.target, roll());
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('keypress', () => {
    rollAll();
  });

  document.querySelector('#dice0')
    .addEventListener('click', handleDiceClick);
  
  document.querySelector('#dice1')
    .addEventListener('click', handleDiceClick);
  
  document.querySelector('#dice2')
    .addEventListener('click', handleDiceClick);
});
