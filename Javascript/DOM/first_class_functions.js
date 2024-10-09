// 1.  What is Function Statement ?
// A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
//       For Ex  -  function xyz(){
//                             console.log("Function Statement");
//                        }

// 2.  What is Function Expression ?
// A.  "When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this because it acts like variable."
// Cannot do hoisting is wrong here. Variable is hoisted. It means  It cannot execute as function until it is defined as function.
//       For Ex - var a = function(){
//                             console.log("Function Expression");
//                     }

// 3.  What is Anonymous Function ?
// A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
//       For Ex - function(){
//                      } 
    // var a = function(){//anonymous function can be used here
//   console.log("Function Expression");
//                     }

// 4.  What is Named Function Expression ?
// A.  A function with a name is known as Named Function Expression.
//       For Ex - var a = function xyx(){
//                             console.log("Names Function Expression");
//                      }

// 5.  Difference b/w Parameters and Arguments ?
// A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
//        For Ex - function ab( param1, param2 ){
//                               console.log("
//                       }
//        & When we call this function & pass a variabel in this ( ) that is our Arguments
//        For Ex - ab( 4, 5 );

// 6.  What is First Class Function Or First class citizens?
// A.   The Ability of use function as value,
// *     Can be passed as an Argument,
// *     Can be executed inside a closured function &
// *     Can be taken as return form.
//        For Ex - var b = function(param){
//                              return function xyz(){
//                                      console.log(" F C F ");
//                              }
//                      } 

// 7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.


//Higher order function : when another function accepts a parameter of another function, also jab ek function kisi aur function ki return karta hai 
function x(){
console.log('Higher order function');
}
function y(x){
    x()
}
const arr=[1,2,3,4]
arr.forEach(function() {})

//Custom events
const newEvent = new Event("Eve")
document.querySelector("button")
.addEventListener("Eve",function(){
    alert("Custom event occured")
})
document.querySelector("button").dispatchEvent(newEvent) // to make the custom event happen this is imp

