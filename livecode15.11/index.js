// ## var let const ##
// function printingOdd() {
//   for (var i = 1; i <= 10; i += 2) {
//     console.log(i);
//   }
//   const test = 17;
//   console.log(i);
// }

// printingOdd();
// console.log(test);

// var -> function scope
// let -> for block scope
// const -> for block scope

// ## Objects ##

// const person = {
//   name: "Msallam",
//   age: 26,
//   student: true,
//   address: {
//     country: "Jordan",
//     City: "Amman",
//     Street: "Msallam Str",
//     grades: [99, 10, 99, 70, { history: 80, National: 35, Geography: 99 }],
//   },
//   talk: function () {
//     console.log("hala");
//   },
//   walk() {
//     console.log("walking");
//   },
// };
// person.name = "ali";
// console.log(person.name);

// console.log(person.name);
// console.log(person.address.grades[4].National);
// console.log(person.talk);
// person.talk();
// person.walk();
//if i want to change property usually i use this method
//person.name = "ali";
//console.log(person.name);
//but in the case i dont know were the property going the best practice be

// person['name'] = 'Mahdi';
// NOTE: we use the square brackets when we don't know which property or method we are going to access | choice is upon the user input
// if we already know what property or method we are going to access, we will use the DOT . notation

// const person = {
//   name: 'Rania',
//   move() {},
//   talk() {}
// };

// person.talk();
// const chosenOne = 'name';

// person[chosenOne] = 'Msallam';

// console.log(person.name);

// ## This Keyword ##

// const person = {
//   name: "Beshir",
//   walk() {
//     console.log(this);
//   },
// };
//in here this go back to object
// person.walk();
//in here this go back to window
// const walk = person.walk;

// walk();

// ## Binding This ##
//to solve the proplem in the previeos example ,when we use this in another scope ,the proplem was this refer to window , in banding we will solve the proplem

// const car = {
//   name: "Audi",
//   model: 2020,
//   shape: "sedan",
// };

// const person = {
//   name: "Abdullah",
//   talk() {
//     console.log(this);
//   },
// };

// person.talk();

// const talk = person.talk.bind(car);

// talk();
//in here we conect btween car object propreties & person object propreties , by the bind.
// ## Arrow Functions ##
//to change function from regular to arrow , if the code have one line , no need for:
//1.() if we have one paramter 2.return 3.{}

//Regular Function
/*
const square = function(number) {
  return number * number;
}

const square = number => number * number;

console.log(square(7));
*/

// Array with Arrow Function
// Array filter method
/*
const subjects = [
  {id: 1, isOpen: true},
  {id: 2, isOpen: true},
  {id: 3, isOpen: false}
]
// return opened subject class 

const activeSubjects = subjects.filter(function(subject) {return subject.isOpen;})

const activeSubjects = subjects.filter(subject => subject.isOpen);

console.log(activeSubjects);
*/

// Arrow function with THis keyword

// The arrow functions doesn't rebind 'This'

// const person = {
//   talk() {
//     // var that = this;
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   },
// };

// person.talk();
//setTimeout function consider is out the function lwhen we use arrow function we solve the previous proplem
// ## Array Map Method ##
//catch items from array and return item shaped list
/*
const colors = ['red', 'green', 'blue', 25, {name:'Sobhi'}];

// const items = colors.map(function(color){
//   return '<li>' + color + '</li>'
// });

const items = colors.map(color => `<li>${color}</li>`);

console.log(items);

*/

// ## Object Destructring ##
/*
const address = {
  street: 'Al Arab',
  city: '',
  country: ''
};
*/
/*
const street = address.street;
const city = address.city;
const country = address.country;

const {street, city, country} = address;

const {street: Str} = address;
//Elais =nickname be balanced give another name 

console.log(Str);
*/

// ## Classes ##
/*
class Person {
  constructor (name){
    //always come with class
    this.name = name;
  }
  drink() {
    console.log('Drinking Avocado with Nuts, honey and cream');
  }
};


const person = new Person;
person.name = 'Msallam';
//we use same name but the diffrent for other the first alpeht ,we use this for Recognize refer to ?
console.log(person);

*/

// ## Inheritance ##

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log('Walk the talk');
//   }
// };

// class Teacher extends Person {
//   constructor(name, subject) {
//     super(name);
//     this.subject = subject;
//   }

//   teach() {
//     console.log('Teaching');
//   }
//   };
// const teacher = new Teacher('Rahaf', 'CSharp');

// console.log(teacher.name);
// teacher.walk();
// console.log(teacher.subject);
