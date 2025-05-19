//singleton
//Object.create  (constructor method)


//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "yash",
    "full name": "yash gupta", 
    //cannot access it via obj.key, so we use obj[key], prefer it
    [mySym]: "myKey1", //use symbol as a key (refer mdn)
    age: 20,
    location: "ho chi min",
    email: "yash@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "yash00004@protonmail.com"
// Object.freeze(jsUser)
jsUser.email = "yash04@yahoo.com"
// console.log(jsUser); 
//do look at the symbol in object from console log it's cool

jsUser.greeting = function(){
    console.log("hello js user");  
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);  
}

console.log(jsUser.greeting()); //print jsUser.greeting as well
console.log(jsUser.greetingTwo()); //print jsUser.greeting as well
