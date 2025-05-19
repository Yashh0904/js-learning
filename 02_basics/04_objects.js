const  steamUser = new Object()             //singleton
// const steamUser = {}             non singleton

steamUser.id = "123abc"
steamUser.name = "rottenCabbage69"
steamUser.isLoggedIn = true

// console.log(steamUser);

const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            fistname: "Yash",
            lastname: "Gupta"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.lastname);   
//? for optional chaining       usually used for api responses

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'c', 4:'d'}

// console.log({obj1, obj2});

// const obj3 = Object.assign({}, obj1, obj2) 
 //Object.assign(target, source(s))

 const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "email1@email.com"
    },
    {
        id: 2,
        email: "email2@email.com"
    },
    {
        id: 3,
        email: "email3@email.com"
    }
]

users[1].email

// console.log(steamUser);

// console.log(Object.keys(steamUser));
// console.log(Object.values(steamUser));
// console.log(Object.entries(steamUser));

// console.log(steamUser.id);
// console.log(steamUser.hasOwnProperty('id'));

const course = {
    coursename: "js hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// course.instructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);




                                //APIs BASICS

// {
//     "name": "yash"
//     "age": 20
//     "born": "deoria"
// }

[
    {},
    {},
    {}
]