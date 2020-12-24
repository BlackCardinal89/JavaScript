// const s = 'Hello World';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''))

// const s = 'technology, computers, it, code';
// console.log(s.split(', '))


// Arrays - variables that hold multiple values
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', '10', true];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'))
console.log(fruits);
console.log(fruits.find(fruit => fruit === '10'))


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// console.log(person.firstName, person.lastName);

// const { firstName, lastName, address: { city }} = person;
// console.log(city);

// person.email = 'islam.permyakov@mail.ru';
// console.log(person)


// const todos = [
//   { 
//       id: 1,
//       text: 'Take out trash',
//       isCompleted: true
//   },
//   {
//       id: 2,
//       text: 'Meeting with boss',
//       isCompleted: true
//   },
//   {
//       id: 3,
//       text: 'Dentist appt',
//       isCompleted: false
//   },
// ];
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// For
// for(let i = 0; i <= 10; i++) {
//   // console.log(i);
//   console.log(`For Loop Number: ${i}`);
// }


//While
// let i = 0;
// while (i < 10) {
//   console.log(`While Loop Number: ${i}`);
//   i++;
// }


// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for(let todo of todos) {
//   console.log(todo.id);
// }


// forEach, map, filter
// todos.forEach(function(todo) {
//   console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//   return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//   return todo.isCompleted === true;
// }).map(function(todo) {
//   return todo.text;
// })
// console.log(todoCompleted);


// const x = 20;
// const y = 10;
// if (x > 10) {
//   console.log('x is 10')
// } else if (x > 10) {
//   console.log('x is greater than 10')
// } else {
//   console.log('x is less than 10');
// }

// const x = 4;
// const y = 11;
// if (x > 5 || y > 10) {
//   console.log('x is more than 5 of y is more than 10');
// }

// const x = 6;
// const y = 11;
// if (x > 5 && y > 10) {
//   console.log('x is more than 5 of y is more than 10');
// }


// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color); // blue

// const x = 11;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color); // red

// const x = 9;
// const color = 'green';
// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//   default:
//     console.log('color is NOT red OR blue')
//     break;
// }


// Function
// function addNums(num1 = 1, num2 = 1) {
//   console.log(num1 + num2);
// }
// addNums(5, 5);

// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }
// console.log(addNums(5, 5));

// const addNums = (num1 = 1, num2 = 1) => {
//   return num1 + num2;
// }
// console.log(addNums(5, 5));

// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(5, 5));

// const addNums = num1 => num1 + 5;
// console.log(addNums(5));


// Constructor functuion
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date (dob);
// }

// Person.prototype.getBirthYear = function() {
//   return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// CLass
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Snith', '3-5-1970');
// console.log(person2.getFullName());
// console.log(person1);


