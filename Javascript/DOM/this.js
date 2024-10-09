"use strict";

console.log(this); //globalObject- window,global

//this inside a function
function myFunction() {
  console.log(this); //global object in non-strict mode(sloppy mode), strict mode madhe undefined
}

//JavaScript uses a mechanism called "this substitution," where "this" is replaced with the global object when it's undefined or null in non-strict mode
myFunction(); //undefined when it is on strict mode
window.myFunction(); //window object will be printed

//this inside object's method
const obj = {
  a: 10,
  x: function () {
    console.log(this); //this" in a method always points to the object that is used to invoke the method
  },
};
obj.x(); //obj will be printed

//"call," "apply," and "bind" are important functions used to manipulate the value of "this" when calling methods and sharing them between objects.
const student = {
  name: "Prathamesh",
  printName: function () { 
    console.log(this);
  },
};
student.printName(); //student will be printed

const student2 = {
  name: "Chavan", //to attach printname method here we will be using call function
};
student.printName.call(student2); //value of this will be student2

//bind
const obj2 = {name:"pratham"};
function abcd(a,b,c){
  console.log(this)
}
abcd.apply(obj,[1,2,3]);
//bind gives another function in return which you can use other time
const anotherFunction = new abcd()
anotherFunction();


//Arrow functions do not have their own 'this' binding and take the value of the enclosing lexical context. so here this value will be window as at the end enclosing lexical will be window object
const arrowFunction = {
  name: "Prathamesh",
  x: () => console.log(this),
};
arrowFunction.x(); //window will be printed

const arrowFunction2 = {
  name: "Prathamesh",
  y: () => {
    z: () => console.log(this); //here the value will be arrowfunction2 object
  },
};
arrowFunction2.y();

// In the context of DOM elements, 'this' refers to the specific HTML element being interacted with.

//function inside method (es5) : will be window
// var obj2 = {
//   sayName: function(){
//     function childFunc(){
//       console.log(this); //u can't access anything out of this as it is window referred function
//     }
//     childFunc();
//   }
// }
// obj2.sayName(); //window will be printed

//function inside method (es6): object
var obj3 = {
sayName : function(){
  const child = ()=>{
    console.log(this);
  }
  child();
}
}
obj3.sayName()

//constructor mai this ki value is: new blank object
function add(){
  console.log(this);
}
const ans = new add();

//event listener mai "this" value refers to the element is that is specified
document.querySelector("button")
.addEventListener("click", function(){
  console.log(this)
})





