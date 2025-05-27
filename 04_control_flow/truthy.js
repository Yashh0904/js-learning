const userEmail = []

if(userEmail){
    console.log("Got an email");
}
else{
    console.log("Don't got an email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN    ONLY

//truthy values
// "0", 'false', " ", [], {}, function(){} and everything else not given in falsy

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }    //to get false for an empty array

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

