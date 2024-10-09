// window.location
// location.reload()
// setTimeout(() => {
//     location.reload()
// },2000)
// location.href = 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' //to change the link
// history //it gives the  scroll count length for the present location
// history.back() //to go back on website
// history.forward() //to go forward of website
// history.go(-1) // to go back of website we can take any number as - for back and + for forward
// innerHeight
// innerWidth
// outerHeight //means portion out of windows also includes means tab
// open(url,target,windowfeature) //to open any link on other tab
// close()//only closes which is opened by open()
// resizeBy(600,40)
// window.open("https://www.mozilla.org/", "mozillaWindow", "resizable");
//  moveTo(0,0)
//  scrollBy(0,50)
//  print() //to print  page

// const name = "Prathamesh";
// let age = 15;
// const isage = false;

let a = {
  name: "Pratham",
  age: 15,
};
let b = {
  name: "Pratham",
  age: 15,
};
Object.assign(a, b);
JSON.stringify(a); //it get converted to string like "{name:pratham,age:15}"
JSON.parse(a); //it converts string to object like {name:pratham,age:15}

// Lexical Scope: It is the ability for a function scope to access variables from the parent scope.
// Block Scope: the variable is accessible within the block that is between the curly braces.
// let and const are block scope and var is global scope but it will not be accessible outside of the function.

let ac = 12;
function ab() {
  function ad() {
    //   ad function's lexical scope is it's parent scope and global scope

    function acd() {
      console.log("Ho");
      acd();
    }
  }
}

//method declaration: when we declare a function inside a object is called as method
const maths = {
  E: 2.3399,
  a: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    //as per ES6
    return a - b;
  },
};

//closures
function x() {
  const a = 10;
  const b = 5;
  function y() {
    console.log(a);
    console.log(b);
  }
  return y; //after storing values of a and b then refernce get's attached to the function and then it's refernce get's attached to return we can see in source.js file in global scope the value it gives has a refernce address
}
const y = x();
console.dir(y);

//event bubbling
green.addeventListener(
  "click",
  (e) => {
    console.log(e.target);
    e.stopPropagation(); //to stop bubbling from parent to child
  },
  { capture: true, once: true }
); //true is used to capture the event so it will run from window to document to parent to child , once:true means only one time the event will trigger

// call,apply,bind
let name = {
  firstName: "John",
  lastName: "Doe",
};
let printfullName = function greet() {
  console.log(this.firstName + " " + this.lastName);
};
printfullName.call(name); //call method is used to call the function with the given this value
printfullName.apply(name, ["Mumbai", "Maharshtra"]); //other arguments will be passed as array other than referance arg
//bind method
let printname = printfullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printname);
printname();
