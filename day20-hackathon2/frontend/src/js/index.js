document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const stage = new Stage(19, 9);
  stage.mount(app);

  const pac = new Pacman(stage, 'Mark', 'boy', 'light', 0, 0);
  pac.mount(stage.element);

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 39) { // Arrow right
      pac.move('right');
    } else if (e.keyCode === 37) { // Arrow right
      pac.move('left');
    } else if (e.keyCode === 38) { // Arrow right
      pac.move('up');
    } else if (e.keyCode === 40) { // Arrow right
      pac.move('down');
    }
  });
});
