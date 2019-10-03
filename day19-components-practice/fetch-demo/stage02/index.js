const todoList = [
  {
    name: 'Prepare the hackathon',
    project: 'Bootcamp',
    status: 'really not done yet',
  },
  {
    name: 'Get beers after hackathon',
    project: 'Bootcamp',
    status: 'looking forward to',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  for(const todo of todoList) {
    const todoComp = new Todo(todo.name, todo.project, todo.status);
    todoComp.mount(container);
  }
});