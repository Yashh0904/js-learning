const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

/*In browser, the global object is Window object (so with console.log(this); on browser)*/

// function one(){
//     let username = "yash";
//     console.log(this);
//     console.log(this.username);
// }


// const one = function() {
//        console.log(this);
//     console.log(this.username); 
// }

// const one = ()=> {  //arrow function
//        console.log(this);
//     console.log(this.username); 
// }

// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
// const addTwo = (num1, num2) => num1 + num2
//used in react, because {} won't work at times

//const addTwo = (num1, num2) => {username: "yash"}
// const addTwo = (num1, num2) => ({username: "yash"})

// console.log(typeof addTwo(3, 4));


// myArray = [2, 5, 3, 7, 8]

// myArray.forEach()