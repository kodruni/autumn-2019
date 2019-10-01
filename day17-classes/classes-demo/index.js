class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  email() {
    return this.firstName + '@springfieldmail.com';
  }
}

const simpsons = [
  new Person('Homer', 'Simpson', 39),
  new Person('Marge', 'Simpson', 36),
  new Person('Bart', 'Simpson', 10),
  new Person('Lisa', 'Simpson', 8),
  new Person('Maggie', 'Simpson', 1),
];
