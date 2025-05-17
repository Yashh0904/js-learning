let score = "33abc"  //"33", "33abc", null, undefined, true, "yash"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); /*js converts anything to a datatype. for example here we get number but output is NaN*/

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = ""  // 0, 1 "" => false, "yash" => true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//*******************   Operations  **************************************************//

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " yash"
let str3 = str1 + str2;
console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3

let gameCounter = 100
++gameCounter
console.log(gameCounter);

