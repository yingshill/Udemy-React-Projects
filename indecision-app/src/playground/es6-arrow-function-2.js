//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments)
    return a + b
}

//this keyword is no longer bound

