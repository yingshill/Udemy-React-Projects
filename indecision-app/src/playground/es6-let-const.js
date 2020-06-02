var nameVar = "Andrew"
var nameVar = "Mike"    // yes, we can do that
console.log("nameVar", nameVar)

let nameLet = "Jen"
nameLet = "Julie"
console.log("nameLet", nameLet)

const nameConst = "Frank"
console.log("nameConst", nameConst)

function getPetname () {
    var petName = "Ha1"
    return petName
}

console.log(petName) //can't because of the function scopt

//block scoping example

var fullName = "Andrew Mead"
if (fullName) {
    var firstName = fullName.split(" ")[0]
    console.log(firstName)  // will work
} 
console.log(firstName) // will work too!

var fullName = "Andrew Mead"
if (fullName) {
    const firstName = fullName.split(" ")[0]
    console.log(firstName)  // will work
} 
console.log(firstName) // will not work too!

/*

1. We can redefine or reassign using var, which is not practical at all
   let: not redefine, can reassign
   const: not redefine, not reassign, the value is constant

2. block scoping
You can only access in block level scopt like for loop, if statement, and this is
not true for 'var'. with var based variables, they are function scoped that this 
variable is scoped to the same scope of this variable, while const and let
are block scope, which doesn't include functions

let + const: block level
        var: function level, if statement, 
*/