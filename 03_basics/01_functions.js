
function sayMyName() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}

//sayMyName()     
//sayMyName is reference while sayMyName is execution

// function addTwoNumbers (number1, number2) {    //parameters in fn definetion
//     console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2) {    //parameters in fn definetion
    // let result = number1 + number2
    // return result
    return number1 + number2
}

/*const result = addTwoNumbers(4, 5)      //arguments in fn call
//why tf would you get a result without return lol

console.log(`Result = ${result}`);*/

// const result = addTwoNumbers(4, 5)  
// console.log(`Result = ${result}`);

function loginUserMessage (userName = "Sam") {
    if(!undefined){
        console.log("Please enter username");
        return
    }
    return `${userName} just logged in.`
}

// console.log(loginUserMessage("Yash"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    userName: "yash",
    price: 199
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    userName: "sam",
    price: 399
})

const myNewArray = [ 200, 100, 400, 600]

function returnSecondValue (getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
