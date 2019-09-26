let result = 0;

const handlePlusClick = () => {
  const textNumber = document.querySelector('#text-number');
  const number = parseInt(textNumber.value, 10);
  result += number;

  const textResult = document.querySelector('#text-result');
  textResult.textContent = result;
};

document.addEventListener('DOMContentLoaded', () => {
  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener('click', handlePlusClick);
});
