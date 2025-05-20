let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log(a);     //block scope
    
}

// console.log(a);     //global scope
// console.log(b);
// console.log(c);

function one() {
    const username = "yash"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    
    two()
}

one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))

function addone(num) {
    return num + 1
}

addone(5)

// addTwo(5)        since addTwo is stored in a variable, we cannot fetch it here
const addTwo = function(num) {      //Expression
    return num + 2
}

addTwo(5)