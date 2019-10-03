class Todo {
  constructor(name, project, status) {
    this.name = name;
    this.project = project;
    this.status = status;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'todo';
    this.element.innerHTML = (
      `<div class="todo__name"></div>
      <div class="todo__project"></div>
      <div class="todo__status"></div>`
    )
    this.update();
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }

  update() {
    const nameElm = this.element.querySelector('.todo__name');
    nameElm.textContent = this.name;
    const projectElm = this.element.querySelector('.todo__project');
    projectElm.textContent = this.project;
    const statusElm = this.element.querySelector('.todo__status');
    statusElm.textContent = this.status;
  }
}
