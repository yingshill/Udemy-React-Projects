/* 

1. The purpose of using classes is to reuse code, then
we can make instances. 

- address of the building
- car: make, model, vin num...(attributes and methods)

2. Create subclass



*/

class Person {
    constructor(name = "Anonymous", age = "0") {    // you can do default here: (name: "Anonymous")
        this.name = name || "test"
        this.age = age || 0
    }
    getGreeting() {
        return `I m ${this.name} and I m ${this.age} years old`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }

}

class Student extends Person {
    constructor(name, age, major) {   // name and age have to put here again, but we don't need to congifure them again below
        super(name, age) //have to call the parent constructor here, let it do its thing and then we can do our things, super refers to the parent class, and pass "name" and "age" 
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }

    getDescription() {     // overwrite the parent method here, type in the method here and rewrite it
        let description = super.getDescription()
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting += `I am visting from ${this.homeLocation}`
        }
    }
}
const me = new Student("Andrew Mead", 26, "Computer Science");


const you = new Traveler("Yingshi Liu", 27, "China")
console.log(you.getGreeting())