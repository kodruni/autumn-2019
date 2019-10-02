document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const bar1 = new ProgressBar(255, 255, 'red');
  bar1.mount(app);
  const bar2 = new ProgressBar(80, 255, 'green');
  bar2.mount(app);
  const bar3 = new ProgressBar(100, 255, 'blue');
  bar3.mount(app);
});
