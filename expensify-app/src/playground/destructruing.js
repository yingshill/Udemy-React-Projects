
/* How it works?

const person = {
    name: "Andrew ",
    age: 27,
    location: {
        city: Philadelphia,
        temp: 88
    }
}

const { name: firstName = "Anonymous", age } = person;
console.log(`${name} is ${age}`)

const { city, temp: temperature} = person.location

*/

const book = {
    title: "Ego is the Enemy",
    author: "Ryan HOliday",
    publisher: {
        name: "Penguin"
    }
}

const { name: publisherName = "Anonymous" } = book.publisher
console.log(`${publisherName}`)