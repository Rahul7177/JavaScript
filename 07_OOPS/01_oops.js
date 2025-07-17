// ---------------------------------------------
// 🎓 Lesson 19 – Object-Oriented Programming in JS
// ---------------------------------------------

// ✅ 1️⃣ What is OOP?
/*
OOP stands for Object-Oriented Programming.
It's a programming paradigm based on the concept of "objects" which hold data (properties) and methods (functions).

4 Pillars of OOP:
1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism
*/


// ✅ 2️⃣ Ways to Create Objects

// 🔹 Using Object Literals
const user1 = {
    name: "Rahul",
    age: 25,
    greet: function () {
        console.log(`Hello, I'm ${this.name}`);
    }
};

user1.greet(); // Hello, I'm Rahul


// 🔹 Using Constructor Functions (before ES6)
function User(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, I'm ${this.name}`);
    };
}

const user2 = new User("Raj", 30);
user2.greet(); // Hello, I'm Raj


// 🔹 Using ES6 Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = new Person("Aman", 22);
person1.greet(); // Hello, my name is Aman


// ✅ 3️⃣ Encapsulation
/*
Encapsulation means wrapping data and methods into a single unit (class).
It also protects internal object state.
*/

// ✅ 4️⃣ Abstraction
/*
Abstraction means hiding complex logic and showing only the necessary parts.
JavaScript doesn't support true private fields until ES2022.
But we can simulate abstraction using closures or the `#` symbol (ES2022).
*/

class BankAccount {
    #balance = 0;

    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited ₹${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount("Ravi");
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
// console.log(acc.#balance); ❌ Error (private field)


// ✅ 5️⃣ Inheritance
/*
Inheritance allows one class (child) to inherit properties and methods from another class (parent).
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Bruno");
dog.speak(); // Bruno barks.


// ✅ 6️⃣ Polymorphism
/*
Polymorphism means "many forms". The same method behaves differently for different classes.
We saw above: `speak()` method behaves differently in Animal and Dog.
*/


// ✅ 7️⃣ Static Methods
/*
Static methods belong to the class itself, not instances.
*/

class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(5, 3)); // 8
// MathUtil.add() can be called without creating an object


// ✅ 8️⃣ Interview Questions for OOP in JS

/*
Q1: What is OOP?
A: Programming model based on objects. Core principles: Encapsulation, Abstraction, Inheritance, Polymorphism.

Q2: How to create objects in JavaScript?
A: Using object literals, constructor functions, or ES6 classes.

Q3: What is `this` keyword in OOP?
A: Refers to the current object (instance) inside a class or function.

Q4: What is encapsulation?
A: Wrapping of variables and functions into a class and restricting access.

Q5: What is abstraction?
A: Hiding internal details and showing only the necessary features.

Q6: What is inheritance?
A: A mechanism by which one class inherits properties and behaviors from another.

Q7: What is polymorphism?
A: Ability to define a function in multiple forms, like method overriding.

Q8: Difference between constructor function and ES6 class?
A:
- Constructor functions were used before ES6.
- ES6 `class` syntax is cleaner and supports features like `extends`, `super`.

Q9: Can we make private variables in JavaScript classes?
A: Yes, using `#` symbol (ES2022+).

Q10: What are static methods?
A: Methods that belong to the class itself, not instances.

Q11: Is JavaScript class-based or prototype-based?
A: JavaScript is prototype-based. Classes are syntactic sugar over prototypes.
*/


// ✅ End of Lesson 19 – OOP in JavaScript
