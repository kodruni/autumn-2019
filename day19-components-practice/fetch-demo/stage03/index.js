document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  
  fetch('http://bootcamp.podlomar.org/api/todo')
    .then(response => response.json())
    .then(todoList => {
      for(const todo of todoList) {
        const todoComp = new Todo(todo.name, todo.project, todo.status);
        todoComp.mount(container);
      }
    });
});