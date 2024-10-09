// var a = 100; //below var shadows this var
// let b = 100; //this let will be in script scope so 100 value will print below let will be block scoped

// function x(){
//   var a = 10;
//   let b = 10;
//   const c = 10;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// x();
// console.log(a); //here only a will be print as it is global scoped else are block scoped
// console.log(b);
// console.log(c);

//illegal shadowing : can't redeclare let(block scoped) and var nut var is function scoped it can redeclare with function 
let a =20
function x(){
var a=20
}

