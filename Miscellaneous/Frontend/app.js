//OOPS //we use oops to structure our code

// // object prototypess
// let arr = [1, 2, 3];
// arr.sayhello = () => {
//   console.log("hello i am arr");
// };

// // accessing prototype 
// console.log(arr.__proto__);
// console.log(Array.prototype);
// console.log(String.prototype);

// //factory function
// function persomMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`hello my name is ${this.name}`);
//         }
//     }
//     return person;
// }

// let p1 = persomMaker("jeet", 22);
// let p2 = persomMaker("raj", 25);
// let p3 = persomMaker("riya", 20);

// console.log(p1);
// console.log(p2.talk());



// //Constructors  -- does not return anything and start with Capital leter it's a rule (developer rule)

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.talk = function() {
//   console.log(`hello my name is ${this.name} and my age is: ${this.age}`);
// };

// let p1 = new Person("raj", 22);
// console.log(p1.talk());
// let p2 = new Person("deep", 28);



// //classes:- //most efficient way to create templates for creating multiple objects  
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`hello my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam", 33);
// let p2 = new Person("raj", 23);




// inheritance:- 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hii my name is ${thsi.name}`);
    }
}

class Stuednt extends Person { //extends keyword use karte he parent class ke constructor ko inheritate karane ke liye
    constructor(name, age, marks) {
        super(name, age); // super keyword se parent class ke constructor ko call jati he  
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

let stu1 = new Stuednt("mohit", 21, 84);
console.log(stu1);
let t1 = new Teacher("ram kumar", 33, "math");
console.log(t1);
