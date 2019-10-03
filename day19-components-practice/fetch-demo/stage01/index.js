document.addEventListener('DOMContentLoaded', () => {
  const todo1 = new Todo(
    'Prepare the hackathon',
    'Bootcamp',
    'really not done yet',
  );
  
  const todo2 = new Todo(
    'Get beers after hackathon',
    'Bootcamp',
    'looking forward to',
  );

  const container = document.querySelector('.container');
  todo1.mount(container);
  todo2.mount(container);
});