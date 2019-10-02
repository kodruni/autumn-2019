class ProgressBar {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  increment() {
    if (this.value < this.max) {
      this.value++;
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }
}
