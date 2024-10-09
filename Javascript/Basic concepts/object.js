// object create with singleton we create it using Object literal
// let rectangle ={
//     length:1,
//     breadth:2,

//     // behaviour adding
//     draw: function(){
//         console.log('draw');
//     }
//     // OR
//     // draw(){
//     //     console.log('draw');
//     // }
// }

// const mysym = Symbol("Key1"); //adding symbol in object
// //singleton
// const Juser = {
//   name: "Pratham",
//   "full name": "Prathamesh chavan",
//   [mysym]: "Mykel", //to use it as symbol we'll be using this with []
//   age: 18,
// };
// console.log(Juser["full name"]); //it is preferred to use bracket method in object rather than dot operator
// console.log(Juser[mysym]);

// Juser.age = "21";
// // Object.freeze(Juser)//to freeze any object
// console.log(Juser);
// //integrating above object with a function
// Juser.greeting = function () {
//   console.log("hello");
// };
// // to provide any value to object with the function
// Juser.greeting = function () {
//   console.log(`hello my name is ${this.name}`); //refers to the object that is currently executing or calling the function.
// };
// console.log(Juser.greeting()); //make sure any object is not freezed


// const obj1 = {1:'a',2:'b',3:'c'}
// const obj2 = {1:'a',2:'b',3:'c'}
// const obj3 = {1:'a',2:'b',3:'c'}
// const obj4 = Object.assign({},obj1,obj2,obj3)//{} is a optional parameter but it should be given to combine all values
// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)
// console.log(Object.keys(obj1))//to get keys
// console.log(Object.entries(obj1))
// console.log(obj1.hasOwnProperty('a'))

//Object destructuring
// const course ={
//     coursename:"js development",
//     price:"999",
//     courseInstructor:"Pratham"
// }
//rather than calling it with dot operator we can give the prop with any other easy name and acccess it with below syntax
// const {courseInstructor:Instructor} = course
// console.log(Instructor)
//  another eg
const us = {
    name:'Prathamesh',
    age:22,
    address:{
      city:'pune',
      state:'maharashtra',
    }
}
// const {name,age} = user
//const{name:username,age:userAge} = user //multilevel destructuring
// const {address{city}} = user //or below can also use
//const {address} = user
// const {city} = address
//calling above object using function same with array
// function user({name,age,city}){ //destructuring
//   console.log(name,age,city)
//   }
//   user(us)

//array destructuring
// const colors = [red,blue,grey,purple]
//as arrays are objects we can see in console tab
// const [0:color1,1:color2,2:color3,3:color4] = colors
// function user({color1,,color3,}){ //destructuring
//   console.log(color1,,color3,) //the color you want that you can add 
//   }
//   user(us)


// //To add no both should be integer
// function addTwoNumbers(Number1,Number2){//these are parameters()inside this
//   // console.log(Number1+Number2)
//   return Number1+Number2//using factory function
// }
// const result = addTwoNumbers(3,4)//these are arguments where values are passed
// console.log("Result: ",result)

//How parameters are taken
// function loginUserName(username="pratham"){
//   if(!username){
//     console.log("please enter a username")
//     return
//   }
//   return `${username} is logged in successfully`
// }
// console.log(loginUserName())//you can pass value inside it and print it

//The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function
// function calculatePrice(val1,val2,...num1){
//  return num1
// }
// console.log(200,300,500,2000)//the output will be 500,200 cause val1 and val2 will be 200,300

//functions with objects
const user = {
  username: "Prathamesh",
  price: 199,
};
function login(anyobject) {
  //
  console.log(
    `username is ${anyobject.username} & price is ${anyobject.price}`
  );
}
//you can pass this by using below two methods
// login(user)
login({ username: "Prathamesh", price: 199 });

//how to create array with function
const newArray = [200, 300, 400, 500];
function createArray(getArray) {
  return getArray[1];
}
// console.log(createArray(newArray))
// console.log(createArray([100,200,300,400]))

//  function createRect(){
//     return rectangle2 ={
//         length:1,
//         breadth:3,

//         draw(){
//             console.log('draw');
//         }
//  }
//  let rectangle2 = createRect();
// we can get answ: rectangle2.length;
// we can get answ: rectangle2.breadth;
// we can get answ: rectangle2.draw();

// Factory Function --> Here we return the object  using return keyword
// function CreateRectangle(len,bre){
//     return rectangle ={
//         length:len,
//         breadth:bre,

//         // behaviour adding
//         draw: function(){
//             console.log('draw');
//         }
//     }
// }
// let rectangleObj1 = CreateRectangle(5,4); // stored inf of create variable in rec var

// Constructor function:- initializes/defines ur properties /methods
// here we use pascal notation , means first letter should be capital
// function Rectangle() {
//     this.length=3;// represents current object
//     this.breadth=7;
//     this.draw= function() {
//         console.log("Drawing Rectangle");

//}
// }

//object creation using constructor
// let rectangleObject = new Rectangle();
// new keyword returns empty object in JS

// dynamic nature of js
// rectangleObject.color = "Yellow";
// console.log(rectangleObject);
// delete  rectangleObject.color;
// console.log(rectangleObject);

//js creates a construction function to execute above functions
// as rectangleObject has a constructor called Rectangle() so the constructor of Rectangle() is it's inbuilt constructor given below
// let rectangle1 = new Function (`length`,`breadth`, `this.length=3;// represents current object
// this.breadth=7;
// this.draw= function() {
//     console.log("Drawing Rectangle");
// }` )

// let a ={value:10};
// let b=a;
// a.value++;
// console.log(a.value)
// console.log(b.value)

// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a); // here it passes value of first line let a=10 , as it is primitive  type
//primitive copies the values so ans will be 10, reference use it as ref value

//  let a={value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);//as reference use it as ref value so here ans will be 11
let rectangle = {
  length: 3,
  breadth: 4,
};
// // for-in loop
// for(let key in rectangle){
//     // keys are reflected through key variable
//     // values are reflected through rectangle[key]
//     console.log(key,rectangle[key])
// }

// for of loop
// for(let key of Object.key(rectangle)){// to get keys
// for(let key of Object.entries(rectangle)){
//     // with Object.entries we get value with keys and with Object.key we only get keys , as here are length,breadth
//     console.log(key)
// }

// to check existing properties in any function
// if('color' in rectangle){
//     console.log('Present')
// }
// else{
//     console.log('Not present')
// }

// object cloning using iteration
// let src={
//     a:19,
//     b:20,
//     c:30,
// }
// let dest ={}

// for(let key in src){
//     dest[key]=src[key]
// }
// console.log("src:",src)
// src.a++
// console.log("dest",dest)

// using object cloning - Assigb
// let src={
//     a:10,
//     b:20,
//     c:30,
// }
// // let dest= {...src} //... is a spread operator
// let dest= Object.assign({},src);
// src.a=90;
// console.log("src:",src);
// console.log("dest:",dest);

// using spread
// let src={
//     a:10,
//     b:20,
//     c:30,
// }
// let dest= {...src}//... is a spread operator
// src.a++;
// console.log("src:",src);
// console.log("dest:",dest);

// function ans(a,b){
//   console.log(arguments) //can print all arguments
//   return a+b
// }
// let stand = ans(1,2,3,4,5)

//to add multiple parameters with it's addition
function sum(a, b) {
  let total = 0;
  for (let value of arguments) total = total + value;
  return total;
}
let ans = sum(1, 2, 3, 4);

//Defauls parameters
function interest(p, r = 5, y = 10) {
  return (p * r * y) / 100;
}
// console.log(interest(1000))

//getters and setters
//getters > access properties
//setters > change or update properties

// function User(email, password) {
//   this._email = email;
//   this._password = password;

//   Object.defineProperty(this, "email", {
//     get: function() {
//       return this._email.toUpperCase();
//     },
//     set: function(value) {
//       this._email = value;
//     }
//   });
// }

const user1 = {
  firstName: "Pratham",
  lastName: "Chavan",
  get fullName() {
    return `My full Name is ${this.firstName} ${this.lastName}`;
  },
  set fullName(value){
    let parts =  value.split(' ')
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
};
console.log(user1.fullName());
user1.fullName="rahul david"


