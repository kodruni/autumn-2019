const age = 23;
const name = 'martin';
const adult = true;
const skills = ['js', 'php', 'drinking', 'sleeping'];
const job = null;

const circleArea = (radius) => {
  return Math.PI * radius ** 2;
};

const square = (x) => {
  return x**2;
};

const hypothenuse = (a, b) => {
  return Math.sqrt(square(a) + square(b));
}

const computeSalary = (pay, hours, days) => {
  return pay * hours * days;
}

const taxedSalary = (salary, tax) => {
  return salary * (1 - tax);
}

const mySalary = taxedSalary(salary(20, 8, 21), 0.25);
