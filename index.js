// const person = {
//     firstName: 'Edvardas',
//     lastName: 'Salnis',
//     address: {
//         street: 'Vilniaus g.'
//     },
//     getFullName() {
//         return `Hello, my name is ${this.firstName} ${this.lastName}`;
//     }
// }

// console.log(person.getFullName());

// Deconstruction methods
// const { firstName } = person;
// console.log(firstName);
// const {address: {street}} = person;
// console.log(street);

// Constructors
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
    // this.getFullName = function () {
    //     return `Hello, my name is ${this.firstName} ${this.lastName}`;
    // }
//}

// Paveldima Person klase
// function PersonInfo(firstName, lastName, age) {
//     Person.call(this, firstName, lastName)
//     this.age = age;
// }

// PersonInfo.prototype = Object.create(Person.prototype);

// const person1 = new PersonInfo('Edvardas', 'Salnis', 18)


// const person1 = new Person('Edvardas', 'Salnis');
// const person2 = new Person('Jonas', 'Jonelis');
// const person3 = new Person('Petras', 'Petrelis');


//Kai turime prototipa, nebereikia funkcijos tureti objekte
// Person.prototype.getFullName = function () {
//     return `Hello, my name is ${this.firstName} ${this.lastName}`;
// }

// console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person3.getFullName());

// ------------------------------------ES6------------------------------------

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
// Prototipai aprasomi uz constructoriaus
    getFullName() {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
    getFirstName() {
        return this.firstName;
    }
}

const person = new Person('Edvardas', 'Salnis');
console.log(person);

// PersonInfo paveldi Person, prototipai paveldimi by default
class PersonInfo extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName);
        this.age = age;
    }
}

const personInfo = new PersonInfo('Jonas', 'Jonaitis', 18);
console.log(personInfo);
