const shoppingList = [
  { name: 'apples', amount: '1kg' },
  { name: 'bacon', amount: '200g' },
  { name: 'cheddar', amount: '250g' },
  { name: 'beer', amount: '6' },
  { name: 'icecream', amount: '1kg' },
];

document.addEventListener('DOMContentLoaded', () => {
  const listElm = document.querySelector('.shopping-list');

  for (const item of shoppingList) {
    const html = (
      `<div class="shopping-list__item">
        <span>${item.name}</span>
        <span>${item.amount}</span>
       </div>`
    );
    listElm.innerHTML += html;
  }
});

const item = {
  name: 'apples',
  amount: '1kg',
};

const notebook = {
  displaySize: 14.3,
  weight: '1.5kg',
  ram: '8GB',
  harddrive: ['128BG SSD', '1TB HDD'],
  processor: {
    frequency: '4GhHz',
    type: 'COre i7',
    cores: '8',
  },
};
