class ProgressBar {
  constructor(value, max, color) {
    this.value = value;
    this.max = max;
    this.color = color;
  }

  increment() {
    if (this.value < this.max) {
      this.value++;
      this.update();
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
      this.update();
    }
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'progress-bar';
    this.element.innerHTML = (
      `<div id="label" class="label">
         <span id="counter"></span>/<span id="maximum"></span>
       </div>
       <div class="progress">
         <div id="minus" class="btn-minus"></div>
         <div class="bar">
           <div id="knob" class="knob"></div>
         </div>
         <div id="plus" class="btn-plus"></div>
       </div>`
    );

    const plusBtn = this.element.querySelector('#plus');
    plusBtn.addEventListener('click', () => {
      this.increment();
    });

    const minusBtn = this.element.querySelector('#minus');
    minusBtn.addEventListener('click', () => {
      this.decrement();
    });

    this.update();
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }

  update() {
    const counter = this.element.querySelector('#counter');
    counter.textContent = `${this.value}`;
    const maximum = this.element.querySelector('#maximum');
    maximum.textContent = `${this.max}`;
    const knob = this.element.querySelector('#knob');
    const step = 100 / this.max;
    knob.style.width = `${this.value * step}%`;
    knob.style.backgroundColor = this.color;
  }
}
