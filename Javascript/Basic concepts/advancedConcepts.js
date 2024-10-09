// function one(){ 
//     const userName = "prathamesh"
// // here the function one can pass values to function two but function two can't pass values to one
//     function two(){
//         const website = "twitter"
//         console.log(userName)
//     }
//     console.log(website)
//     two()
// }
// one()//we have to call the function after ending of scope

// you can call the function before it's naming
// addOne()
// function addOne(num){
//     return num+1
// }

// // here you can't 
// addTwo()
// const addVar = function addTwo(num){
//     return num+2
// }

//this keyword:
const user ={
    username: "prathamesh",
    age: 20,

    welcomeMsg: function(){
        console.log(`welcome ${this.username} you are ${this.age} years old`)
        console.log(this)
    }
}
user.welcomeMsg()
user.age= 21
user.welcomeMsg()
console.log(this)//this here is executing in node env, check in console tab it will give window object as output
//what if it is printed inside a function
function test(){
    console.log(this)
}
test()

//arrow function
// const addTwo = (num1,num2){
//     return num1+num2 //explicit return keyword
// }
const addTwo = (num1,num2) => (num1 + num2 )
const addswo = (num1,num2) => ({username:"pratham"})//to use object inside scope 
// this is called implicit return when we don't use any return keyword and we can wrap it with ()

//Immediately invoked function expression(IIFE), the function runs as soon as it get's invoked
// to execute a function globablly it can make some conflicts with other functions so we can write that inside a iife to make it usable to only important function
//global scope ke pollution se prblm hoti hai kai baar , any var or declaration at global scope to remove that
(function chai(){ //named iife
    let age=20
    console.log("chai is ready")
})() //wrap it with parenthsis

(function hello(a,b){
    console.log(a+b)
})(2,5)

((name) => { //unnamed iife
    console.log(`db connected two ${name}`);
})('pratham')

