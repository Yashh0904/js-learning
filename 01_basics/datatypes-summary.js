//Primitive

/*7 types
    String
    Number
    Boolean
    null
    undefined
    Symbol
    BigInt
*/

// const id = Symbol('123')
// const anotherSymbol = Symbol('123')
// console.log(id == anotherSymbol);

const bigNumber = 9159496519446197n
console.log(typeof bigNumber);



//Reference Tupe

/*  Arrays
    Objects
    Functions
*/

const score = 100   //JavaScript is dynamically typed

const ballers = ["ronaldo", "messi", "lewandowski"]

let myObj = {
    name: "yash",
    age: 20,
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof myFunction); //function
console.log(typeof ballers); //object
console.log(typeof myObj); //object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

//  Stack (primitive) and Heap (Non-primitive)

let myName = "yash"

let anotherName = myName
anotherName = "vidushi"

//primitive data types go in stack memory. when we do anotherName = myName, a copy of myName is created for anotherName to refer to

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "userOne@google.com",
    upi: "userOne@ybl",
}

let userTwo = userOne

//unlike stack memory, in heap memory, non-primitive data types reference to the location in head. each copy made also points at the same heap location. changes at once place change all data type values

userTwo.email = "userTwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
